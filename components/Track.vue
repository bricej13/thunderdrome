<template>
  <div>
    {{ track.title }}
  </div>
</template>

<script>
export default {
  name: 'Track',
  params: {
    track: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
