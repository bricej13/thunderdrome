<template>
  <div class="pbar-wrapper has-background-white is-clipped" @click="seek($event)">
    <div class="pbar" :style="{transform: 'translateY(' + (100 - 100 * pct) + '%)'}" />
  </div>
</template>

<script>
export default {
  name: 'VerticalProgressBar',
  props: {
    value: {
      type: Number,
      required: true
    },
    range: {
      type: Number,
      default: 12
    }
  },
  computed: {
    pct () {
      return (this.value + this.range) / 24
    }
  },
  methods: {
    seek (event) {
      const container = event.target.closest('.pbar-wrapper')
      const y = container.getBoundingClientRect().bottom - event.clientY
      const pct = y / container.getBoundingClientRect().height
      const db = (pct * this.range * 2) - this.range
      const trunked = Math.round(db * 10) / 10
      this.$emit('change', trunked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

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
