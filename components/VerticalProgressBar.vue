<template>
  <div class="pbar-wrapper has-background-white is-clipped" @click="seek($event)">
    <div class="pbar" :style="{transform: 'translateY(' + (100 - 100 * value) + '%)'}" />
  </div>
</template>

<script>
export default {
  name: 'VerticalProgressBar',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    seek (event) {
      const container = event.target.closest('.pbar-wrapper')
      const y = container.getBoundingClientRect().bottom - event.clientY
      const pct = y / container.getBoundingClientRect().height
      this.$store.dispatch('player/volumeTo', pct)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.pbar-wrapper {
  height: 100%;
  width: 10px;

  .pbar {
    background-color: $primary;
    height: 100%;
    width: 100%;
  }
}

</style>
