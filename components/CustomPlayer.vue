<template>
  <div ref="wrapper">
    <audio ref="player1" crossorigin="anonymous">
      Audio tag is not supported in this browser.
    </audio>
    <audio ref="player2" crossorigin="anonymous">
      Audio tag is not supported in this browser.
    </audio>
    <viz v-if="$store.getters['settings/showViz']" style="position: absolute; top: 2px;" :height="vizHeight" :width="vizWidth" />
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
      source2: null,
      vizWidth: 100,
      vizHeight: 80
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
          // https://developer.chrome.com/blog/autoplay/#web-audio
          await this.$audioContext.resume()
        }
        console.log(this.$audioContext)
        this.player.play()
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
      player.addEventListener('timeupdate', event => this.setCurrentTime(player.currentTime))
    }

    if (this.currentStream) {
      this.load(this.currentStream)
    }
    if (this.nextStream) {
      this.queue(this.nextStream)
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      this.vizWidth = entries[0].contentRect.width
    })
    this.resizeObserver.observe(this.$refs.wrapper)
    this.$refs.wrapper.addEventListener('click', (e) => {
      const pct = (e.clientX - e.target.offsetLeft) / e.target.offsetWidth
      const newTime = pct * this.duration
      this.player.currentTime = newTime
    })
  },
  unmounted () {
    this.resizeObserver.unobserve(this.$refs.wrapper)
  },
  methods: {
    ...mapMutations('player', ['setCurrentTime', 'setTrackDuration']),
    ...mapActions('player', ['playNextTrack', 'prevTrack']),
    load (url) {
      if (this.player.src !== url) {
        this.player.src = url
        this.setTrackDuration(this.player.duration)
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
