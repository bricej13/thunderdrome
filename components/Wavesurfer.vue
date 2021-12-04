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
      hasScrobbled: false
    }
  },
  computed: {
    ...mapGetters('player', ['activeStream', 'currentStream', 'currentTime', 'duration', 'volume', 'playing', 'currentTrack', 'albumArt', 'bandValues']),
    ...mapGetters('settings', ['scrobbleAt'])
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
    },
    bandValues (preset) {
      const filters = this.instance.getFilters() // [index].gain.value = value
      for (let i = 0; i < preset.values.length; i++) {
        filters[i].gain.value = preset.values[i]
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
      backend: 'WebAudio'
    })
    this.instance.backend.setFilters(this.setupFilters())
    this.instance.on('loading', (v) => {
      this.$nextTick(() => {
        this.$nuxt.$loading.increase(v - this.$nuxt.$loading.get())
      })
    })
    this.instance.on('ready', () => {
      this.$emit('loading', false)
      if (this.playing) {
        this.instance.play()
        this.showCurrentTrackToast()
      }
    })
    this.instance.on('waveform-ready', () => {
      this.$nextTick(() => this.$nuxt.$loading.finish())
      // window.localStorage.setItem(this.currentTrack.mediaFileId || this.currentTrack.id, JSON.stringify(this.instance.backend.mergedPeaks))
    })
    this.instance.on('audioprocess', (v) => {
      this.setCurrentTime(v)
      if (!isNaN(this.instance.getDuration())) {
        this.setTrackDuration(this.instance.getDuration())
      }
      if (!this.hasScrobbled && this.currentTime / this.duration > this.scrobbleAt) {
        this.hasScrobbled = true
        this.$api.track.scrobble(this.currentTrack.id)
      }
    })
    this.instance.on('finish', () => this.nextTrack())
    if (this.currentStream) { this.load(this.currentStream) }
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
      this.hasScrobbled = false
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        console.log('$loading.start')
      })
      this.$emit('loading', true)
      const peaks = JSON.parse(window.localStorage.getItem(this.currentTrack.mediaFileId || this.currentTrack.id))
      if (peaks && peaks.length > 100) {
        this.instance.load(url, peaks)
      } else {
        this.instance.load(url)
      }
    },
    showCurrentTrackToast () {
      this.$buefy.toast.open({
        position: 'is-top-right',
        pauseOnHover: true,
        type: 'is-text',
        duration: 5000,
        message: `
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="${this.albumArt}" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content has-text-left has-text-text-invert">
            <p class="is-size-4 has-text-weight-bolder">${this.currentTrack.title}</p>
            <p class="is-size-6">${this.currentTrack.artist}</p>
          </div>
        </div>`
      })
    },
    setupFilters () {
      const bandValues = this.$store.getters['player/bandValues']
      return [...this.$store.getters['player/bands']].map(function (band, i) {
        const filter = this.instance.backend.ac.createBiquadFilter()
        filter.type = band.type
        filter.gain.value = bandValues.values[i]
        filter.Q.value = 1
        filter.frequency.value = band.f
        return filter
      }.bind(this))
    }
  }
}
</script>

<style scoped>

</style>
