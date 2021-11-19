<template>
  <div>
    <div class="level p-2">
      <div class="title">
        Playlists
      </div>
      <button class="button" @click="isCreatePlaylistActive = true">
        Add Playlist
      </button>
    </div>
    <div v-for="playlist in playlists" :key="playlist.id" class="columns is-vcentered">
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
        <div class="p-1 is-clickable" @click="startPlaylist(playlist.id, false)">
          <ion-icon name="play" size="large" />
        </div>
      </div>
      <div class="column is-narrow">
        <div class="p-1 is-clickable" @click="startPlaylist(playlist.id, true)">
          <ion-icon name="shuffle" />
        </div>
      </div>
    </div>
    <b-modal
      :active="isCreatePlaylistActive"
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      aria-modal
    >
      <template #default>
        <smart-playlist-editor @close="isCreatePlaylistActive = false" />
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Playlists',
  data () {
    return {
      isCreatePlaylistActive: false
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Playlists'
    }
  },
  computed: {
    ...mapGetters('playlists', ['playlists', 'getPlaylist'])
  },
  mounted () {
    this.$store.dispatch('playlists/loadPlaylists')
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
