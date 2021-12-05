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
export default {
  name: 'Playlist',
  async asyncData ({ store, params, $api }) {
    const playlist = await $api.playlist.get(params.id)
    const tracks = await $api.playlist.tracks(params.id)
    return { playlistId: params.id, tracks, playlist }
  },
  data () {
    return {
      checked: []
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
