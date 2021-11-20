<template>
  <div v-if="tracks != null" class="playlist-view">
    <div class="columns px-2 is-vcentered">
      <div class="column title mb-0">
        {{ playlist.name }}
      </div>
      <div class="column is-narrow">
        <play-controls :tracks="tracks" :name="playlist.name" />
      </div>
    </div>
    <track-list :tracks="tracks" :hide-fields="['album']" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Playlist',
  async asyncData ({ store, params }) {
    if (store.getters['playlists/playlists'].length === 0) {
      await store.dispatch('playlists/loadPlaylists')
    }
    if (!store.getters['playlists/playlistTracksLoaded'](params.id)) {
      await store.dispatch('playlists/loadPlaylistTracks', params.id)
    }
    return { playlistId: params.id }
  },
  data () {
    return {
      checked: [],
      columns: [
        {
          field: 'id',
          visible: false
        },
        {
          field: 'title',
          label: 'Title'
        },
        {
          field: 'artist',
          label: 'Artist'
        },
        {
          field: 'album',
          label: 'Album'
        },
        {
          field: 'year',
          label: 'Year'
        }
      ]
    }
  },
  head () {
    return {
      title: `Thunderdrome - ${this.playlist?.name}`
    }
  },
  computed: {
    ...mapGetters('playlists', ['getPlaylist', 'getPlaylistTracks']),
    playlist () {
      return this.getPlaylist(this.playlistId)
    },
    tracks () {
      return this.getPlaylistTracks(this.playlistId)
    },
    playlistDuration () {
      return this.getPlaylistTracks(this.playlistId).reduce((acc, cur) => acc + cur.duration, 0)
    }
  }
}
</script>

<style lang="scss">
  .playlist-view {
    .playlist-header {
      position: sticky;
    }
    table .td {
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
