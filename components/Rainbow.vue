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
      background-color: $ui3-yellow;
    }
    &.orange {
      background-color: $ui3-orange;
    }
    &.red {
      background-color: $ui3-red;
    }
    &.beet {
      background-color: $ui3-beet;
    }
    &.fuchsia {
      background-color: $ui3-fuchsia;
    }
  }
}

</style>
