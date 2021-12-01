<template>
  <section>
    <div class="is-flex is-flex-direction-row is-align-items-center">
      <div ref="waveform" class="waveform" />
      <a @click="showEq = true">
        <ion-icon name="bar-chart-outline" />
      </a>
    </div>
    <b-modal v-model="showEq" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div v-if="instance" class="content">
            <equalizer :ac="instance.backend.ac" @filterChange="updateFilter" />
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import WaveSurfer from 'wavesurfer'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Wavesurfer',
  data () {
    return {
      instance: null,
      showEq: false
    }
  },
  computed: {
    ...mapGetters('player', ['activeStream', 'currentStream', 'volume', 'playing', 'currentTrack', 'albumArt'])
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
      backend: 'WebAudio'
    })
    this.instance.backend.setFilters(this.setupFilters())
    this.instance.on('loading', (v) => {
      console.log('loading', v)
    })
    this.instance.on('ready', () => {
      if (this.playing) {
        this.instance.play()
        this.$emit('loading', false)
        this.showCurrentTrackToast()
      }
    })
    this.instance.on('waveform-ready', () => {
      // window.localStorage.setItem(this.currentTrack.mediaFileId || this.currentTrack.id, JSON.stringify(this.instance.backend.mergedPeaks))
    })
    this.instance.on('audioprocess', (v) => {
      this.setCurrentTime(v)
      if (!isNaN(this.instance.getDuration())) {
        this.setTrackDuration(this.instance.getDuration())
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
        message: `
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="${this.albumArt}" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content has-text-left">
            <p class="title is-4 has-text-light">${this.currentTrack.title}</p>
            <p class="subtitle is-6 has-text-light">${this.currentTrack.artist}</p>
          </div>
        </div>`
      })
    },
    setupFilters () {
      return [...this.$store.getters['player/bands']].map(function (band) {
        const filter = this.instance.backend.ac.createBiquadFilter()
        filter.type = band.type
        filter.gain.value = band.val
        filter.Q.value = 1
        filter.frequency.value = band.f
        return filter
      }.bind(this))
    },
    updateFilter ({ index, value }) {
      this.instance.getFilters()[index].gain.value = value
    }
  }
}
</script>

<style scoped>

</style>
