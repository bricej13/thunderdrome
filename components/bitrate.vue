<template>
  <div>
    <span v-if="suffix === 'flac'" class="tag is-primary">{{ suffix.toUpperCase() }}</span>
    <span v-else class="tag is-beet">{{ suffix.toUpperCase() }} {{ bitRate }}</span>
  </div>
</template>

<script>
export default {
  name: 'Bitrate',
  props: {
    bitRate: {
      type: Number,
      required: true
    },
    suffix: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
