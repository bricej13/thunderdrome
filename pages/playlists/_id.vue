<template>
  <div v-if="tracks != null" class="playlist-view">
    <div class="level">
      <div class="level-left">
        <div class="title">
          {{ playlist.name }}
        </div>
      </div>
      <play-controls :tracks="tracks" :name="playlist.name" />
    </div>
    <TrackList :tracks="tracks" />
  </div>
</template>

<script>

export default {
  name: 'Playlist',
  async asyncData ({ store, params }) {
    if (store.getters['playlists/playlists'].length === 0) {
      console.log('loading playlists')
      await store.dispatch('playlists/loadPlaylists')
    }
    if (!store.getters['playlists/playlistTracksLoaded'](params.id)) {
      console.log('loading tracks')
      await store.dispatch('playlists/loadPlaylistTracks', params.id)
    }
    return {
      playlist: store.getters['playlists/getPlaylist'](params.id),
      tracks: store.getters['playlists/getPlaylistTracks'](params.id)
    }
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
    playlistDuration () {
      return this.tracks.reduce((acc, cur) => acc + cur.duration, 0)
    }
  }
}
</script>

<style>
  .playlist-view table .td {
    text-overflow: clip;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
