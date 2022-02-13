<template>
  <canvas ref="canvas" :height="height" :width="width" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Viz',
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      canvasCtx: null,
      drawCallback: null,
      resizeObserver: null
    }
  },
  computed: {
    ...mapGetters('player', ['duration', 'currentTime'])
  },
  mounted () {
    this.canvasCtx = this.$refs.canvas.getContext('2d')
    const bufferLength = this.$analyser.frequencyBinCount
    this.dataArray = new Uint8Array(bufferLength)
    this.draw()
  },
  unmounted () {
    window.cancelAnimationFrame(this.drawCallback)
  },
  methods: {
    draw () {
      this.drawCallback = requestAnimationFrame(this.draw)
      const bufferLength = this.$analyser.frequencyBinCount

      this.$analyser.getByteFrequencyData(this.dataArray)

      this.canvasCtx.fillStyle = 'rgb(254, 251, 229)'
      this.canvasCtx.fillRect(0, 0, this.width, this.height)
      this.canvasCtx.font = '10px Arial'

      const gradient = this.canvasCtx.createLinearGradient(this.width / 2, 0, this.width / 2, this.height)
      const gradient2 = this.canvasCtx.createLinearGradient(this.width / 2, 0, this.width / 2, this.height)
      const opacity = 1
      const yellow = o => `hsla(43,99%,50%, ${o})`
      const orange = o => `hsla(14,100%,49%, ${o})`
      const red = o => `hsla(0,100%,49%, ${o})`
      const beet = o => `hsla(344,100%,43%, ${o})`
      const fuchsia = o => `hsla(331,97%,26%, ${o})`
      gradient.addColorStop(0.25, yellow(opacity))
      gradient.addColorStop(0.40, orange(opacity))
      gradient.addColorStop(0.55, red(opacity))
      gradient.addColorStop(0.70, beet(opacity))
      gradient.addColorStop(0.85, fuchsia(opacity))
      gradient2.addColorStop(0.25, yellow(0.7))
      gradient2.addColorStop(0.40, orange(0.7))
      gradient2.addColorStop(0.55, red(0.7))
      gradient2.addColorStop(0.70, beet(0.7))
      gradient2.addColorStop(0.85, fuchsia(0.7))

      const barWidth = (this.width / bufferLength)
      let x = 0

      const currentBar = Math.round((this.currentTime / this.duration) * bufferLength)
      const trackCompletion = Math.floor((this.currentTime / this.duration) * this.width)

      for (let i = 0; i < bufferLength; i++) {
        const barPct = (this.dataArray[i] / 255)
        const barHeight = barPct * this.height * 1.2

        this.canvasCtx.fillStyle = i < currentBar ? gradient : gradient2 //  `rgba(129,2,63, ${barPct * 0.5})`
        this.canvasCtx.fillRect(x, this.height - barHeight, barWidth - 1, barHeight)

        // this.canvasCtx.save()
        // this.canvasCtx.translate(this.width - 1, 0)
        // this.canvasCtx.rotate(3 * Math.PI / 2)
        // this.canvasCtx.fillText(i, x, this.height - (10 * (i % 8))) // text and position
        // this.canvasCtx.restore()

        x += barWidth
      }

      this.canvasCtx.fillStyle = 'rgba(0, 0, 0, 1)'// a color name or by using rgb/rgba/hex values
      // this.canvasCtx.fillText(trackCompletion + '/' + bufferLength, 10, 20) // text and position

      this.canvasCtx.fillStyle = fuchsia
      this.canvasCtx.fillRect(trackCompletion, 0, 1, this.height)
      // this.canvasCtx.fillRect(0, this.height - 5, trackCompletion, this.height)
    }
  }
}
</script>

<style scoped>

</style>
