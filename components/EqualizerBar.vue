<template>
  <input
    type="range"
    :min="-range"
    :max="range"
    :step=".1"
    :value="value"
    orient="vertical"
    @input="oninput"
  >
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
  methods: {
    oninput ({ target }) {
      this.$emit('change', parseFloat(target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

input[type="range"] {
  width: 20px;
  height: 200px;
  appearance: slider-vertical;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #ccc;
  border: none;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
}

</style>
