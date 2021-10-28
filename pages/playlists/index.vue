<template>
  <section class="">
    Playlists
    <NuxtLink v-for="playlist in $store.state.playlists" :key="playlist.id" :to="`/playlists/${playlist.id}`">
      {{ playlist.name }}
    </NuxtLink>
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
