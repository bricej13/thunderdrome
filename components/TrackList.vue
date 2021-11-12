<template>
  <div>
    <div class="columns is-vcentered is-mobile is-variable is-1" style="border-bottom: 2px solid black">
      <div class="column ml-2 has-text-weight-bold">
        Title
      </div>
      <div class="column has-text-weight-bold">
        Artist
      </div>
      <div class="column ml-2 has-text-weight-bold is-hidden-mobile">
        Album
      </div>
      <div class="column ml-2 has-text-weight-bold is-narrow">
        &nbsp;
      </div>
    </div>
    <div v-for="(track, i) in tracks" :key="track.id + i" class="columns is-vcentered is-mobile is-variable is-1" style="border-bottom: 1px solid black">
      <div class="column ml-2 has-text-weight-bold">
        {{ track.title }}
      </div>
      <div class="column">
        <NuxtLink :to="{name: 'artists-id', params: { id: track.artistId}}">
          {{ track.artist }}
        </NuxtLink>
      </div>
      <div class="column is-hidden-mobile">
        <NuxtLink :to="{name: 'albums-id', params: { id: track.albumId}}">
          {{ track.album }}
        </NuxtLink>
      </div>
      <div class="column is-narrow ml-2">
        <a
          class="px-2 is-clickable"
          @click="startPlaylist(tracks.slice(i))"
        >
          <b-icon icon="play" size="is-small" />
        </a>
        <a
          class="px-2 is-clickable"
          @click="appendToPlaylist([track])"
        >
          <b-icon icon="plus" size="is-small" />
        </a>
      </div>
    </div>
  </div>

  <!--  <table class="table is-fullwidth is-hoverable track-list">-->
<!--    <thead>-->
<!--      <tr>-->
<!--        <th>Title</th>-->
<!--        <th>Artist</th>-->
<!--        <th>Album</th>-->
<!--        <th style="width: 10%" />-->
<!--      </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--      <tr v-for="track in tracks" :key="track.id">-->
<!--        <td>{{ track.title }}</td>-->
<!--        <td>-->
<!--          <NuxtLink :to="{name: 'artists-id', params: { id: track.artistId}}">-->
<!--            {{ track.artist }}-->
<!--          </NuxtLink>-->
<!--        </td>-->
<!--        <td>-->
<!--          <NuxtLink :to="{name: 'albums-id', params: { id: track.albumId}}">-->
<!--            {{ track.album }}-->
<!--          </NuxtLink>-->
<!--        </td>-->
<!--        <td>-->
<!--          <div class="level">-->
<!--            <a-->
<!--              class="p-1 is-clickable"-->
<!--              @click="startPlaylist([track])"-->
<!--            >-->
<!--              <b-icon icon="play" size="is-small" />-->
<!--            </a>-->
<!--            <a-->
<!--              class="p-1 is-clickable"-->
<!--              @click="appendToPlaylist([track])"-->
<!--            >-->
<!--              <b-icon icon="plus" size="is-small" />-->
<!--            </a>-->
<!--          </div>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </tbody>-->
<!--  </table>-->
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

</style>
