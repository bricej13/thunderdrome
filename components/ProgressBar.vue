<template>
  <div class="pbar-wrapper has-background-white is-clipped" @click="seek($event)">
    <div class="pbar" :style="{transform: 'translateX(' + (-100+value) + '%)'}" />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    seek (event) {
      const container = event.target.closest('.pbar-wrapper')
      const x = event.clientX - container.getBoundingClientRect().left
      const pct = x / container.getBoundingClientRect().width
      this.$store.dispatch('player/seekToPct', pct)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.pbar {
  height: 20px;
  width: 100%;
  background-color: $primary;
}

</style>
