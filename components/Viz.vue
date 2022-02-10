<template>
  <div ref="wrapper" style="width: 100%;  height: 100%;">
    <canvas ref="canvas" :height="height" :width="width" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Viz',
  data () {
    return {
      canvasCtx: null,
      drawCallback: null,
      height: 40,
      width: 100
    }
  },
  mounted () {
    this.width = this.$refs.wrapper.clientWidth
    this.height = this.$refs.wrapper.clientHeight
    this.canvasCtx = this.$refs.canvas.getContext('2d')
    // this.canvasCtx.fillStyle = 'rgb(200, 200, 200)'
    // this.canvasCtx.fillRect(0, 0, this.width, this.height)

    const bufferLength = this.$analyser.frequencyBinCount
    this.dataArray = new Uint8Array(bufferLength)
    this.draw()
    this.$audioContext.onstatechange = function (a) {
      console.log('statechange', a)
    }
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.drawCallback)
  },
  computed: {
    ...mapGetters('player', ['duration', 'currentTime'])
  },
  methods: {
    draw () {
      this.drawCallback = requestAnimationFrame(this.draw)
      const bufferLength = this.$analyser.frequencyBinCount

      this.$analyser.getByteFrequencyData(this.dataArray)

      this.canvasCtx.fillStyle = 'rgb(254, 251, 229)'
      this.canvasCtx.fillRect(0, 0, this.width, this.height)

      const gradient = this.canvasCtx.createLinearGradient(this.width / 2, 0, this.width / 2, this.height)
      const opacity = 1
      const yellow = `hsla(43,99%,50%, ${opacity})`
      const orange = `hsla(14,100%,49%, ${opacity})`
      const red = `hsla(0,100%,49%, ${opacity})`
      const beet = `hsla(344,100%,43%, ${opacity})`
      const fuchsia = `hsla(331,97%,26%, ${opacity})`
      gradient.addColorStop(0.25, yellow)
      gradient.addColorStop(0.40, orange)
      gradient.addColorStop(0.55, red)
      gradient.addColorStop(0.70, beet)
      gradient.addColorStop(0.85, fuchsia)

      const barWidth = (this.width / bufferLength)
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        const barPct = (this.dataArray[i] / 255)
        const barHeight = barPct * this.height * 1.5

        this.canvasCtx.fillStyle = gradient //  `rgba(129,2,63, ${barPct * 0.5})`
        this.canvasCtx.fillRect(x, this.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }
      // this.canvasCtx.font = '16px Arial'
      // this.canvasCtx.fillStyle = '#000000' // a color name or by using rgb/rgba/hex values
      // this.canvasCtx.fillText(this.currentTime / this.duration, 10, 20) // text and position

      const trackCompletion = (this.currentTime / this.duration) * this.width
      this.canvasCtx.fillStyle = fuchsia
      // this.canvasCtx.fillRect(trackCompletion, 0, 2, this.height)
      this.canvasCtx.fillRect(0, this.height - 5, trackCompletion, this.height)
    }
  }
}
</script>

<style scoped>

</style>
