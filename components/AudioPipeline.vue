<template>
  <div>
    <div class="columns">
      <div v-for="deck in decks" :key="deck.id" class="column">
        <b-message :type="deck.playing ? 'is-success' : ''">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <b-skeleton v-if="deck.track == null" width="64" height="64" />
                <img v-else :src="albumArtUrl(deck.track.albumId)">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <div class="columns">
                  <div class="column">
                    <p v-if="deck.track">
                      <strong>{{ deck.track.title }}</strong>
                      <br>
                      {{ deck.track.artist }}
                      <br>
                      <span v-if="false">
                        {{ deck.startTime }} |
                        {{ currentTime }} |
                        {{ deck.buffer.duration }}
                      </span>
                    </p>
                    <div v-else>
                      <b-skeleton width="100%" height="20px" animated />
                      <b-skeleton width="80%" height="20px" animated />
                    </div>
                  </div>
                </div>
                <b-progress :type="deck.loading ? '' : 'is-primary'" :min="0" :max="1" :value="deck.loading ? deck.progress : (!deck.playing ? 0 : (currentTime - deck.startTime) / deck.buffer.duration)" />
              </div>
            </div>
          </article>
        </b-message>
      </div>
    </div>
    <b-button @click="playPauseDeck">
      {{ playing ? 'Pause' : 'Play' }}
    </b-button>
    <b-button @click="next">
      Next
    </b-button>

    <b-field label="Gain">
      <b-slider :value="1" :step=".1" :min="0" :max="5" @input="gainNode.gain.value = $event" />
    </b-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AudioPipeline',
  data () {
    return {
      audioContext: null,
      gainNode: null,
      compressorNode: null,
      analyserNode: null,
      decks: [
        { id: 0, i: 0, buffer: null, analyser: null, source: null, track: null, playing: false, startTime: 0, offset: 0, progress: 0, loading: false },
        { id: 1, i: 1, buffer: null, analyser: null, source: null, track: null, playing: false, startTime: 0, offset: 0, progress: 0, loading: false }
      ],
      currentTime: 0
    }
  },
  computed: {
    ...mapGetters('player', ['albumArtUrl', 'activeStream', 'i', 'hasQueue', 'playlist', 'currentStream', 'streamList', 'nextStream', 'volume', 'playing', 'currentTrack', 'nextTrack', 'albumArt']),
    playing () { return this.decks[0].playing || this.decks[1].playing }
  },
  watch: {
    i (i) {
      const deckToLoad = this.decks[0].playing ? 1 : 0
      this.loadTrackInDeck(this.decks[deckToLoad], this.nextTrack, this.nextStream)
    },
    playing (playing) {
      if (playing) {
        window.requestAnimationFrame(this.updateProgress.bind(this))
      }
    }
  },
  mounted () {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.gainNode = this.audioContext.createGain()
    this.compressorNode = this.audioContext.createDynamicsCompressor()
    this.analyserNode = this.audioContext.createAnalyser()

    this.gainNode.connect(this.analyserNode)
    this.analyserNode.connect(this.audioContext.destination)
    if (this.hasQueue) {
      this.loadTrackInDeck(this.decks[0], this.currentTrack, this.currentStream)
      this.loadTrackInDeck(this.decks[1], this.nextTrack, this.nextStream)
    }
  },
  methods: {
    next () {
      if (this.decks[0].playing) {
        this.stopDeck(this.decks[0])
        this.decks[1].source.start(0)
        this.decks[1].playing = true
        this.decks[1].startTime = this.audioContext.currentTime
      } else {
        this.stopDeck(this.decks[1])
        this.decks[0].source.start(0)
        this.decks[0].playing = true
        this.decks[0].startTime = this.audioContext.currentTime
      }
      this.$store.dispatch('player/nextTrack')
    },
    loadTrackInDeck (deck, track, streamUrl, start) {
      this.stopDeck(deck)
      deck.loading = true
      deck.track = track
      this.getFileBuffer(streamUrl, deck).then((buffer) => {
        // source.addEventListener('ended', () => {
        //   console.log('deck1complete')
        //   source.disconnect()
        //   this.decks[deckIndex].i = 0
        // })
        deck.buffer = buffer
        const { source, analyser } = this.getAudioSource(buffer)
        deck.source = source
        deck.analyser = analyser
        deck.loading = false
        if (start) {
          deck.source.start(0)
        }
      })
    },
    playPauseDeck () {
      const deck = this.decks[1].playing ? this.decks[1] : this.decks[0]
      if (!deck.playing) {
        deck.startTime = this.audioContext.currentTime
        deck.source.start(0, deck.offset + 150)
        deck.playing = true
      } else {
        deck.source.stop()
        deck.playing = false
        deck.offset += this.audioContext.currentTime - deck.startTime
        const { source, analyser } = this.getAudioSource(deck.buffer)
        deck.source = source
        deck.analyser = analyser
      }
    },
    updateProgress () {
      this.currentTime = this.audioContext.currentTime
      if (this.playing) {
        window.requestAnimationFrame(this.updateProgress.bind(this))
      }
    },
    stopDeck (deck) {
      if (deck.source) {
        try {
          deck.source.stop()
        } catch (e) {
          // ignore
        }
      }
      deck.playing = false
      deck.offset = 0
      deck.track = null
    },
    async getFileBuffer (url, deck) {
      const response = await fetch(url)
      const length = parseInt(response.headers.get('Content-Length'))
      const array = new Uint8Array(length)
      let at = 0 // to index into the array
      const reader = response.body.getReader()
      for (;;) {
        const { done, value } = await reader.read()
        if (done) {
          break
        }
        deck.progress = at / length
        array.set(value, at)
        at += value.length
      }

      // const arrayBuffer = new ArrayBuffer(length)
      return await this.audioContext.decodeAudioData(array.buffer)
    },
    getAudioSource (buffer) {
      const source = this.audioContext.createBufferSource()
      const analyser = this.audioContext.createAnalyser()
      source.buffer = buffer
      source.addEventListener('ended', () => {
        this.next()
      })

      source.connect(analyser)
      analyser.connect(this.gainNode)

      return { source, analyser }
    }
  }
}
</script>

<style scoped>

</style>
