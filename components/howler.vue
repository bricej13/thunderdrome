<template>
  <div>
    <span>Total duration: {{ duration }} seconds</span>
    <span>Progress: {{ (progress * 100) }}%</span>
    <button @click="togglePlayback">
      {{ playing ? 'Pause' : 'Play' }}
    </button>
    <button @click="stop">
      Stop
    </button>
  </div>
</template>
<script>
import VueHowler from 'vue-howler'
export default {
  name: 'Howler',
  mixins: [VueHowler]
}
</script>

<style scoped>

</style>
