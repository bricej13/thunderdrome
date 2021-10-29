<template>
  <b-table
    class="mb-6"
    :data="tracks"
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
    <b-table-column v-slot="props" field="id">
      <div class="is-flex play-controls">
        <b-tooltip
          label="play"
          position="is-top"
          type="is-dark"
          :delay="1000"
          square
        >
          <a
            class="p-1 is-clickable"
            @click="startPlaylist([props.row])"
          >
            <b-icon icon="play" size="is-medium" />
          </a>
        </b-tooltip>
        <b-tooltip
          label="append to queue"
          position="is-top"
          type="is-dark"
          :delay="1000"
          square
        >
          <a
            class="p-1 is-clickable"
            @click="appendToPlaylist([props.row])"
          >
            <b-icon icon="plus" size="is-medium" />
          </a>
        </b-tooltip>
      </div>
    </b-table-column>
  </b-table>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TrackList',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions('player', [
      'appendToPlaylist',
      'startPlaylist'
    ])
  }
}
</script>

<style scoped>
tr .play-controls {
  visibility: hidden;
}
tr:hover .play-controls {
  visibility: visible;
}

</style>
