<template>
  <div>
    <audio ref="player1" controls crossorigin="anonymous">
      Audio tag is not supported in this browser.
    </audio>
    <audio ref="player2" controls crossorigin="anonymous">
      Audio tag is not supported in this browser.
    </audio>
    <viz v-if="$store.getters['settings/showViz']" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Viz from '~/components/Viz'

export default {
  name: 'CustomPlayer',
  components: { Viz },
  data () {
    return {
      activePlayer: true,
      gainNode: null,
      source1: null,
      source2: null
    }
  },
  computed: {
    ...mapGetters('player', ['activeStream', 'currentStream', 'currentTime', 'duration', 'volume', 'playing', 'currentTrack', 'albumArt', 'bandValues', 'nextStream', 'compressor']),
    ...mapGetters('settings', ['scrobbleAt', 'cacheSize']),
    player () {
      return this.activePlayer ? this.$refs.player1 : this.$refs.player2
    },
    onDeckPlayer () {
      return !this.activePlayer ? this.$refs.player1 : this.$refs.player2
    }
  },
  watch: {
    activeStream (url) {
      this.activePlayer = !this.activePlayer
      this.load(url)
    },
    nextStream (url) {
      this.queue(url)
    },
    async playing (playing) {
      if (playing) {
        if (this.$audioContext.state === 'suspended') {
          console.log('audio context was suspended')
          await this.$audioContext.resume().then(() => this.player.play())
            .catch(e => console.error('could not resume audio context', e))
        } else {
          console.log('audio context was _not_ suspended')
          this.player.play()
        }
      } else {
        this.player.pause()
      }
    },
    volume (v) {
      this.gainNode.gain.value = v
    }
  },
  mounted () {
    if (this.$audioContext) {
      const initialGain = new GainNode(this.$audioContext, { gain: 1 })
      this.gainNode = new GainNode(this.$audioContext, { gain: this.volume })
      initialGain.connect(this.$compressor)
      this.$compressor.connect(this.$analyser)
      this.$analyser.connect(this.$loudness)
      this.$loudness.connect(this.gainNode)
      this.gainNode.connect(this.$audioContext.destination)

      this.source1 = this.$audioContext.createMediaElementSource(this.$refs.player1)
      this.source1.connect(initialGain)
      this.source2 = this.$audioContext.createMediaElementSource(this.$refs.player2)
      this.source2.connect(initialGain)
    }

    for (const player of [this.$refs.player1, this.$refs.player2]) {
      player.addEventListener('ended', event => this.playNextTrack())
      player.addEventListener('play', event => this.setTrackDuration(player.duration))
      player.addEventListener('timeupdate', event => this.$emit('timeupdate', player.currentTime))
    }

    if (this.currentStream) {
      this.load(this.currentStream)
    }
    if (this.nextStream) {
      this.queue(this.nextStream)
    }
  },
  methods: {
    ...mapMutations('player', ['setCurrentTime', 'setTrackDuration']),
    ...mapActions('player', ['playNextTrack', 'prevTrack']),
    load (url) {
      if (this.player.src !== url) {
        this.player.src = url
      }
      if (this.playing) {
        this.player.play()
        this.onDeckPlayer.pause()
      }
    },
    queue (url) {
      if (this.onDeckPlayer.src !== url) {
        this.onDeckPlayer.src = url
      } else {
        this.onDeckPlayer.load()
      }
    }
  }
}
</script>

<style scoped>

</style>
