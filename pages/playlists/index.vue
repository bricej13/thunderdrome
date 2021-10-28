<template>
  <section class="">
    Playlists
    <div v-for="playlist in $store.state.playlists" :key="playlist.id" class="columns is-vcentered">
      <div class="column">
        <NuxtLink :to="`/playlists/${playlist.id}`" class="is-size-2">
          {{ playlist.name }}
        </NuxtLink>
      </div>
      <div class="column is-narrow">
        {{ playlist.songCount }} tracks
      </div>
      <div class="column is-narrow">
        {{ playlist.duration | playlisttime }}
      </div>
      <div class="column is-narrow">
        <b-switch :value="playlist.public" disabled>
          Public
        </b-switch>
      </div>
      <!--      <div class="column is-narrow">-->
      <!--        <div class="level">-->
      <!--          <div class="p-1 is-clickable" @click="$store.commit('player/startPlaylist', tracks)">-->
      <!--            <b-icon icon="play" size="is-large" />-->
      <!--          </div>-->
      <!--          <div class="p-1 is-clickable" @click="$store.commit('player/shufflePlaylist', tracks)">-->
      <!--            <b-icon icon="shuffle" size="is-large" />-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
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
