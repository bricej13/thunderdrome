<template>
  <div>
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
import * as LRU from 'lru-cache'

const arrayBufferCache = new LRU({ max: 10 })

export default {
  name: 'AudioPipeline',
  data () {
    return {
      audioContext: null,
      gainNode: null,
      compressorNode: null,
      analyserNode: null,
      deck: { id: 0, i: 0, buffer: null, analyser: null, source: null, track: null, playing: false, startTime: 0, offset: 0, progress: 0, loading: false },
      currentTime: 0
    }
  },
  computed: {
    ...mapGetters('player', ['albumArtUrl', 'streamUrl', 'activeStream', 'i', 'hasQueue', 'playlist', 'currentStream', 'streamList', 'nextStream', 'volume', 'playing', 'currentTrack', 'nextTrack', 'albumArt'])
  },
  watch: {
    playing (playing) {
      console.log('playing', playing)
      this.playPauseDeck()
      if (playing) {
        window.requestAnimationFrame(this.updateProgress.bind(this))
      }
    },
    // currentTrack (track) {
    //   this.preloadFile(track.id, this.streamUrl(track))
    // },
    // nextTrack (track) {
    //   this.preloadFile(track.id, this.streamUrl(track))
    // },
    currentTrack (track) {
      // const buffer = arrayBufferCache.get(track.id) || await this.getFileBuffer(this.streamUrl(track))
      //
      // Object.assign(this.deck, { track }, this.getAudioSource(buffer))
      console.log('currentTrack', track)
      this.loadTrackInDeck(this.deck, track, this.streamUrl(track), true)
      this.preloadFile(this.nextTrack.id, this.streamUrl(this.nextTrack))
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
      this.loadTrackInDeck(this.deck, this.currentTrack, this.currentStream)
      this.preloadFile(this.nextTrack.id, this.streamUrl(this.nextTrack))
    }
  },
  destroyed () {
    this.audioContext.close()
  },
  methods: {
    next () {
      if (this.deck.playing) {
        this.stopDeck(this.deck)
      }
      this.$store.dispatch('player/nextTrack')
    },
    async loadTrackInDeck (deck, track, streamUrl, start) {
      this.stopDeck(deck)
      deck.loading = true
      deck.track = track
      const buffer = arrayBufferCache.get(track.id) || await this.getFileBuffer(streamUrl)
      deck.buffer = buffer
      const { source, analyser } = this.getAudioSource(buffer)
      deck.source = source
      deck.analyser = analyser
      deck.loading = false
      if (start) {
        deck.source.start(0)
      }
    },
    playPauseDeck () {
      if (!this.deck.source) { return }
      if (!this.deck.playing) {
        this.deck.startTime = this.audioContext.currentTime
        this.deck.source.start(0, this.deck.offset)
        this.deck.playing = true
      } else {
        this.deck.source.stop()
        this.deck.playing = false
        this.deck.offset += this.audioContext.currentTime - this.deck.startTime
        const { source, analyser } = this.getAudioSource(this.deck.buffer)
        this.deck.source = source
        this.deck.analyser = analyser
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
    async getFileBuffer (url) {
      console.log('getting file buffer', url)
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
        // deck.progress = at / length
        array.set(value, at)
        at += value.length
      }

      // const arrayBuffer = new ArrayBuffer(length)
      console.log('got file buffer')
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
    },
    preloadFile (trackId, url) {
      if (arrayBufferCache.has(trackId)) { return }
      this.getFileBuffer(url)
        .then(buffer => arrayBufferCache.set(trackId, buffer))
    }
  }
}
</script>

<style scoped>

</style>
