<template>
  <div>
    <canvas ref="canvas" :height="height" :width="width" />
  </div>
</template>

<script>
export default {
  name: 'Visualizer',
  props: {
    mediaElement: {
      type: HTMLMediaElement,
      required: true
    }
  },
  data () {
    return {
      audioCtx: null,
      source: null,
      analyser: null,
      bufferLength: null,
      dataArray: null,
      canvasCtx: null,
      height: 150,
      width: 600
    }
  },
  mounted () {
    // eslint-disable-next-line vue/no-mutating-props
    this.mediaElement.crossOrigin = 'http://localhost:3000'
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    this.source = this.audioCtx.createMediaElementSource(this.mediaElement)
    this.analyser = this.audioCtx.createAnalyser()
    this.bufferLength = this.analyser.frequencyBinCount
    this.dataArray = new Uint8Array(this.bufferLength)
    this.canvasCtx = this.$refs.canvas.getContext('2d')
    this.canvasCtx.clearRect(0, 0, this.width, this.height)

    this.drawGraph()
  },
  beforeDestroy () {
    this.audioCtx.close()
  },
  methods: {
    drawOsciliscope () {
      requestAnimationFrame(this.drawOsciliscope)
      this.analyser.getByteTimeDomainData(this.dataArray)
      this.canvasCtx.fillStyle = 'rgb(200, 200, 200)'
      this.canvasCtx.fillRect(0, 0, this.width, this.height)

      this.canvasCtx.lineWidth = 2
      this.canvasCtx.strokeStyle = 'rgb(0, 0, 0)'
      this.canvasCtx.beginPath()

      const sliceWidth = this.width * 1.0 / this.bufferLength
      let x = 0
      for (let i = 0; i < this.bufferLength; i++) {
        const v = this.dataArray[i] / 128.0
        const y = v * this.height / 2

        if (i === 0) {
          this.canvasCtx.moveTo(x, y)
        } else {
          this.canvasCtx.lineTo(x, y)
        }

        x += sliceWidth
      }

      this.canvasCtx.lineTo(this.width, this.height / 2)
      this.canvasCtx.stroke()
    },
    drawGraph () {
      requestAnimationFrame(this.drawGraph)

      this.analyser.getByteFrequencyData(this.dataArray)

      this.canvasCtx.fillStyle = 'rgb(0, 0, 0)'
      this.canvasCtx.fillRect(0, 0, this.width, this.height)

      const barWidth = (this.width / this.bufferLength) * 2.5
      let barHeight
      let x = 0

      for (let i = 0; i < this.bufferLength; i++) {
        barHeight = this.dataArray[i] / 2

        this.canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)'
        this.canvasCtx.fillRect(x, this.height - barHeight / 2, barWidth, barHeight)

        x += barWidth + 1
      }
    }
  }
}
</script>

<style scoped>

</style>
