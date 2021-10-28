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
      <div class="column is-narrow">
        <div class="level">
          <div class="p-1 is-clickable" @click="startPlaylist(playlist.id, false)">
            <b-icon icon="play" size="is-large" />
          </div>
          <div class="p-1 is-clickable" @click="startPlaylist(playlist.id, true)">
            <b-icon icon="shuffle" size="is-large" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Playlists',
  computed: {
    ...mapGetters(['getPlaylist'])
  },
  mounted () {
    this.$store.dispatch('loadPlaylists')
  },
  methods: {
    async startPlaylist (id, shuffle) {
      const tracks = await this.$axios.$get(
        `api/playlist/${id}/tracks`
      )
      if (shuffle) {
        this.$store.commit('player/startPlaylist', tracks)
      } else {
        this.$store.commit('player/shufflePlaylist', tracks)
      }
    }
  }
}
</script>

<style scoped>

</style>
