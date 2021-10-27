<template>
  <div class="pbar-wrapper has-background-white is-clipped">
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
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.pbar {
  height: 10px;
  width: 100%;
  background-color: $primary;
}

</style>
