<template>
  <div ref="waveform" class="waveform" />
</template>
<script>
import WaveSurfer from 'wavesurfer'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Wavesurfer',
  data () {
    return {
      instance: null,
      song: 'https://***REMOVED***/rest/stream?u=***REMOVED***&t=384874214fddcb997cab567a70e2e36a&s=d43521&f=json&v=1.8.0&c=ui3&id=76af792ecc15bec528707497e1c6d618&_1636000191071'
    }
  },
  computed: {
    ...mapGetters('player', ['activeStream', 'volume', 'playing', 'currentTrack'])
  },
  watch: {
    activeStream (v) {
      this.load(v)
    },
    volume (v) {
      this.instance.setVolume(v)
    },
    playing (playing) {
      if (playing) {
        // when page is reloaded, but audio has not been loaded yet
        if (this.instance.backend.buffer === undefined) {
          this.load(this.activeStream)
        }
        this.instance.play()
      } else {
        this.instance.pause()
      }
    }
  },
  mounted () {
    this.instance = WaveSurfer.create({
      container: this.$refs.waveform,
      barWidth: 2,
      barHeight: 2,
      barGap: null,
      height: 80,
      backend: 'MediaElement'
    })
    this.instance.on('ready', () => {
      this.instance.play()
    })
    this.instance.on('waveform-ready', () => {
      window.localStorage.setItem(this.currentTrack.mediaFileId || this.currentTrack.id, JSON.stringify(this.instance.backend.mergedPeaks))
    })
    this.instance.on('audioprocess', (v) => {
      this.setCurrentTime(v)
      if (!isNaN(this.instance.getDuration())) {
        this.setTrackDuration(this.instance.getDuration())
      }
    })
    this.instance.on('finish', () => this.nextTrack())
  },
  beforeDestroy () {
    this.instance.destroy()
  },
  methods: {
    ...mapMutations('player', ['setCurrentTime', 'setTrackDuration']),
    ...mapActions('player', ['nextTrack']),
    togglePlay () {
      this.instance.playPause()
    },
    load (url) {
      const json = window.localStorage.getItem(this.currentTrack.mediaFileId || this.currentTrack.id)
      if (json) {
        this.instance.load(url, JSON.parse(json))
      } else {
        this.instance.load(url)
      }
    }
  }
}
</script>

<style scoped>

</style>
