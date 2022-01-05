export default function (ctx, inject) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  inject('audioContext', audioCtx)

  const analyser = new AnalyserNode(audioCtx, {
    fftSize: 512,
    minDecibels: -90,
    maxDecibels: -10,
    smoothingTimeConstant: 0.85
  })
  inject('analyser', analyser)
  const loudness = new AnalyserNode(audioCtx, {
    fftSize: 32,
    minDecibels: -90,
    maxDecibels: -10,
    smoothingTimeConstant: 0.85
  })
  inject('loudness', loudness)
  // const c = audioCtx.createDynamicsCompressor()
  // c.threshold.setValueAtTime(c.threshold, audioCtx.currentTime)
  // c.knee.setValueAtTime(c.knee, audioCtx.currentTime)
  // c.ratio.setValueAtTime(c.ratio, audioCtx.currentTime)
  // c.attack.setValueAtTime(c.attack, audioCtx.currentTime)
  // c.release.setValueAtTime(c.release, audioCtx.currentTime)
  // inject('compressor', c)
}
