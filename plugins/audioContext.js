export default function (ctx, inject) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  inject('audioContext', audioCtx)

  const analyser = new AnalyserNode(audioCtx, {
    fftSize: 256,
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
  const compressor = new DynamicsCompressorNode(audioCtx)
  inject('compressor', compressor)
}
