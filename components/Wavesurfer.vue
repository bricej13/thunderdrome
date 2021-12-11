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
    ...mapGetters('player', ['activeStream', 'currentStream', 'currentTime', 'duration', 'volume', 'playing', 'currentTrack', 'albumArt', 'bandValues', 'nextTrack']),
    ...mapGetters('settings', ['scrobbleAt', 'cacheSize'])
  },
  watch: {
    activeStream (v) {
      this.load(v)
    },
    nextTrack (t) {
      console.log(`preloading: ${t.artist} - ${t.title}`)
      this.getMediaBlob(t.mediaFileId || t.id)
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
      this.$nuxt.$loading.set(v)
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
    this.instance.on('finish', () => this.playNextTrack())
    if (this.currentStream) { this.load(this.currentStream) }
    this.getMediaBlob(this.nextTrack.mediaFileId || this.nextTrack.id)
  },
  beforeDestroy () {
    this.instance.destroy()
  },
  methods: {
    ...mapMutations('player', ['setCurrentTime', 'setTrackDuration']),
    ...mapActions('player', ['playNextTrack']),
    togglePlay () {
      this.instance.playPause()
    },
    async load (url) {
      this.hasScrobbled = false
      this.$emit('loading', true)
      this.$nextTick(() => this.$nuxt.$loading.start())
      const mediaBlob = await this.getMediaBlob(this.currentTrack.mediaFileId || this.currentTrack.id)
      this.instance.loadBlob(mediaBlob)
      this.$nextTick(() => this.$nuxt.$loading.finish())
    },
    async getMediaBlob (id) {
      if (!id) { return }
      const track = await this.$db.tracks.get(id)
      if (track) {
        return track.blob
      } else {
        const buffer = await this.$api.track.mediaFile(id)
        const blob = new Blob([buffer.data])

        navigator.storage.estimate().then(async (estimate) => {
          if (estimate.usage + blob.size > this.cacheSize) {
            await this.clearOutOlderTracks(estimate.usage, blob.size)
          }
          this.$db.tracks.put({
            id, blob, lastAccessed: new Date().getTime(), track: { ...this.currentTrack }
          }).then(() => console.log(`inserted ${id} into db`))
        })

        return blob
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
    },
    async clearOutOlderTracks () {
      const toDelete = await this.$db.tracks.orderBy('lastAccessed').first()
      console.log('deleting track ', toDelete.track.title, toDelete.track.artist)
      if (toDelete) {
        this.$db.tracks.delete(toDelete.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
