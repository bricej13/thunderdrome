<template>
  <div>
    <div class="level">
      <div class="title">
        Playlists
      </div>
    </div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Playlists',
  head () {
    return {
      title: 'Thunderdrome - Playlists'
    }
  },
  computed: {
    ...mapGetters(['getPlaylist'])
  },
  mounted () {
    this.$store.dispatch('loadPlaylists')
  },
  methods: {
    ...mapActions('player', [
      'startPlaylist', 'shufflePlaylist', 'appendToPlaylist'
    ]),
    ...mapActions(['loadPlaylists']),
    async startPlaylist (id, shuffle) {
      const tracks = await this.$axios.$get(
        `api/playlist/${id}/tracks`
      )
      if (shuffle) {
        await this.$store.dispatch('player/startPlaylist', tracks)
      } else {
        await this.$store.dispatch('player/shufflePlaylist', tracks)
      }
    }
  }
}
</script>

<style scoped>

</style>
