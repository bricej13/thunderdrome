<template>
  <div v-if="tracks != null" class="playlist-view">
    <div class="columns px-2 is-vcentered">
      <div class="column">
        <div class="title mb-0">
          {{ playlist.name }}
        </div>
        <div class="is-size-5 has-text-grey has-text-weight-light">
          <span>{{ playlist.songCount }} tracks </span>
          ·
          <span>{{ playlist.duration | playlisttime }}</span>
          ·
          <span>{{ tracks.reduce((acc, cur) => acc + cur.playCount, 0) }} plays</span>
          <!--          Public <b-switch :value="playlist.public" size="is-small" :rounded="false" @input="togglePlaylistPublic(props)" />-->
        </div>
      </div>
      <div class="column is-narrow">
        <play-controls :tracks="tracks" :name="playlist.name" size="large" />
      </div>
    </div>
    <track-list :tracks="tracks" :hide-fields="['album', 'trackNumber']" :bulk-delete="removeTracks" />
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
  },
  methods: {
    async removeTracks (tracks) {
      await this.$api.playlist.deleteTracks(this.playlist.id, tracks.map(t => t.id))
      this.tracks = await this.$api.playlist.tracks(this.playlist.id)
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
