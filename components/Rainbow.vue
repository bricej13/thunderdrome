<template>
  <div class="rainbow">
    <div class="bar yellow" />
    <div class="bar orange" />
    <div class="bar red" />
    <div class="bar beet" />
    <div class="bar fuchsia" />
  </div>
</template>

<script>
export default {
  name: 'Rainbow'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";
.rainbow {
  .bar {
    width: 100%;
    height: 40px;
    &.yellow {
      background-color: $color1;
    }
    &.orange {
      background-color: $color2;
    }
    &.red {
      background-color: $color3;
    }
    &.beet {
      background-color: $color4;
    }
    &.fuchsia {
      background-color: $color5;
    }
  }
}

</style>
