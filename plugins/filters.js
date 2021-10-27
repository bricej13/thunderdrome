import Vue from 'vue'
import { format, formatDuration } from 'date-fns'

Vue.filter('tracktime', (v) => {
  const d = new Date(0)
  d.setSeconds(v)
  return format(d, 'm:ss')
  return formatDuration({ seconds: v })
})
