import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('tracktime', (v) => {
  const d = new Date(0)
  d.setSeconds(v)
  return format(d, 'm:ss')
})
Vue.filter('playlisttime', (v) => {
  const d = new Date(0)
  d.setSeconds(v)
  return format(d, 'h:m:ss')
})
