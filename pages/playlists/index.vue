<template>
  <section class="section">
    Playlists
  </section>
</template>

<script>
export default {
  name: 'Playlists',
  mounted () {
    this.$store.dispatch('loadPlaylists')
  }
}
</script>

<style scoped>

</style>
