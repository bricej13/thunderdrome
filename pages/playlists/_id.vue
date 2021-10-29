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
  async asyncData ({ $axios, store, params }) {
    if (store.state.playlists.length === 0) {
      await store.dispatch('loadPlaylists')
    }
    const playlist = store.getters.getPlaylist(params.id)
    const tracks = await $axios.$get(
      `api/playlist/${params.id}/tracks`
    )
    return { playlist, tracks }
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
