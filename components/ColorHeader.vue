<template>
  <div class="p-1 is-size-3 has-text-text-inverse" :class="bgColor">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ColorHeader',
  props: {
    i: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      colors: ['yellow', 'orange', 'red', 'beet', 'fuchsia']
    }
  },
  computed: {
    bgColor () {
      return 'has-background-' + this.colors[this.i % this.colors.length]
    }
  }
}
</script>

<style scoped>

</style>
