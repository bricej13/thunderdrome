<template>
  <div v-if="tracks != null" class="playlist-view">
    <div class="level">
      <div class="level-left">
        <page-title :text="playlist.name" />
      </div>
      <div class="level-right">
        <b-tooltip
          :label="`play ${playlist.name}`"
          position="is-left"
          type="is-dark"
          square
        >
          <div
            class="p-1 is-clickable"
            @click="$store.commit('player/startPlaylist', tracks)"
          >
            <b-icon icon="play" size="is-large" />
          </div>
        </b-tooltip>
        <b-tooltip
          :label="`shuffle ${playlist.name}`"
          position="is-left"
          type="is-dark"
          square
        >
          <div
            class="p-1 is-clickable"
            @click="$store.commit('player/shufflePlaylist', tracks)"
          >
            <b-icon icon="shuffle" size="is-large" />
          </div>
        </b-tooltip>
      </div>
    </div>
    <b-table
      class="mb-6"
      :data="tracks"
      :checked-rows.sync="checked"
      hoverable
    >
      <b-table-column v-slot="props" field="title" label="Title">
        <span class="is-uppercase">
          {{ props.row.title }}
        </span>
      </b-table-column>
      <b-table-column v-slot="props" field="artist" label="Artist">
        {{ props.row.artist }}
      </b-table-column>
      <b-table-column v-slot="props" field="album" label="Album">
        {{ props.row.album }}
      </b-table-column>
      <!--      <b-table-column v-slot="props" field="year" label="Year">-->
      <!--        {{ props.row.year }}-->
      <!--      </b-table-column>-->
      <!--      <b-table-column v-slot="props" field="duration" label="Duration">-->
      <!--        {{ props.row.duration | tracktime }}-->
      <!--      </b-table-column>-->
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  async asyncData ({ $axios, store, params }) {
    const playlist = store.getters.playlist(params.id)
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
