import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('tracktime', (v) => {
  const d = new Date(0)
  d.setSeconds(v)
  return format(d, 'm:ss')
})
Vue.filter('playlisttime', (v) => {
  const d = Number(v)
  const h = Math.floor(d / 3600)
  const m = Math.floor(d % 3600 / 60)
  const s = Math.floor(d % 3600 % 60)

  const hDisplay = h > 0 ? h + 'h ' : ''
  const mDisplay = m > 0 ? m + 'm ' : ''
  const sDisplay = s > 0 && h === 0 ? s + 's' : ''
  return hDisplay + mDisplay + sDisplay
})
Vue.filter('freq', (v) => {
  if (v < 1000) {
    return `${v}`
  } else {
    return `${v / 1000}K`
  }
})
