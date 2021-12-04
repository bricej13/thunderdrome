<template>
  <div class="p-1 mt-5 mb-4 subtitle is-size-3 has-text-text-inverse" :class="[`has-background-${colors[i]}`]">
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
