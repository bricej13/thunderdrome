<template>
  <div ref="waveform" class="waveform is-invisible" style="height: 0" />
</template>
<script>
import WaveSurfer from 'wavesurfer'
import { mapGetters } from 'vuex'

export default {
  name: 'WavesurferPreload',
  data () {
    return {
      instance: null
    }
  },
  computed: {
    ...mapGetters('player', ['nextStream', 'nextTrack'])
  },
  watch: {
    nextStream (nextStream) {
      if (nextStream !== undefined) {
        this.instance.load(nextStream)
        console.log('preloading ' + this.nextTrack.title, this.nextTrack.mediaFileId || this.nextTrack.id)
      }
    }
  },
  mounted () {
    this.instance = WaveSurfer.create({
      container: this.$refs.waveform,
      backend: 'MediaElement'
    })
    this.instance.on('waveform-ready', () => {
      const peaks = this.instance.backend.mergedPeaks
      try {
        window.localStorage.setItem(this.nextTrack.mediaFileId || this.nextTrack.id, JSON.stringify(peaks))
      } catch {
        console.log('clearing out local storage')
        const keysToDelete = Object.keys(window.localStorage).filter(k => !['user', 'player'].includes(k))
        for (const key of keysToDelete) {
          window.localStorage.removeItem(key)
        }
        window.localStorage.setItem(this.nextTrack.mediaFileId || this.nextTrack.id, JSON.stringify(peaks))
      }
      console.log(`finished preloading ${this.nextTrack.title}`, `found ${this.instance.backend.mergedPeaks.length} peaks`)

      // Code for calculating crossover point
      // for (let i = peaks.length - 1; i--; i > 0) {
      //   if (Math.abs(peaks[i]) < 0.00001) { continue }
      //   const sum = Math.abs(peaks[i]) + Math.abs(peaks[i - 1]) + Math.abs(peaks[i - 2]) + Math.abs(peaks[i - 3]) + Math.abs(peaks[i - 4]) + Math.abs(peaks[i - 5])
      //   if (sum > 0.005) {
      //     const cutTime = (i / peaks.length) * this.instance.getDuration()
      //     console.log('found last interesting peak', i, peaks.length, cutTime, '/', this.instance.getDuration())
      //     break
      //   }
      // }
    })
  },
  beforeDestroy () {
    this.instance.destroy()
  }
}
</script>

<style scoped>

</style>
