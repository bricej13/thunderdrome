<template>
  <table class="table is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th style="width: 10%" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="track in tracks" :key="track.id">
        <td>{{ track.title }}</td>
        <td>
          <NuxtLink :to="{name: 'artists-id', params: { id: track.artistId}}">
            {{ track.artist }}
          </NuxtLink>
        </td>
        <td>
          <NuxtLink :to="{name: 'albums-id', params: { id: track.albumId}}">
            {{ track.album }}
          </NuxtLink>
        </td>
        <td>
          <div class="level">
            <a
              class="p-1 is-clickable"
              @click="startPlaylist([track])"
            >
              <b-icon icon="play" size="is-small" />
            </a>
            <a
              class="p-1 is-clickable"
              @click="appendToPlaylist([track])"
            >
              <b-icon icon="plus" size="is-small" />
            </a>
          </div>
        </td>
        </nuxtlink>
        </td>
      </tr>
    </tbody>
  </table>
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

<style lang="scss" scoped>
tr .play-controls {
  visibility: hidden;
}
tr:hover .play-controls {
  visibility: visible;
}

table.table {
  table-layout: fixed;
  td, th {
    vertical-align: middle;
    padding: 0 .5em;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
}

</style>
