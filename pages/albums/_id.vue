<template>
  <div>
    <div class="is-flex is-flex-direction-row is-align-items-start mb-4">
      <div class="m-2">
        <album-art :album="album" />
      </div>
      <div class="is-flex-grow-1 pl-1">
        <div class="title is-size-1">
          {{ album.name }}
        </div>
        <div class="subtitle is-3">
          <NuxtLink :to="{name: 'artists-id', params: {id: album.artistId}}">
            {{ album.artist }}
          </NuxtLink>
        </div>
        <div>
          <b-rate v-model="album.rating" @change="updateRating(album.id, $event)" />
        </div>
      </div>
      <div class="">
        <play-controls :tracks="tracks" />
      </div>

    <!--    <pre>{{ album }}</pre>-->
    </div>
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th>Duration</th>
          <th>Play Count</th>
          <th>Rating</th>
          <th style="width: 10%" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="track in tracks" :key="track.id">
          <td>{{ track.trackNumber }}</td>
          <td>{{ track.title }}</td>
          <td>
            <NuxtLink :to="{name: 'artists-id', params: { id: track.artistId}}">
              {{ track.artist }}
            </NuxtLink>
          </td>
          <td>
            {{ track.duration | tracktime }}
          </td>
          <td>
            {{ track.playCount }}
          </td>
          <td>
            <b-rate v-model="track.rating" @change="updateRating(track.id, $event)" />
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
        </tr>
      </tbody>
    </table>
    <!--    <Container group-name="track-target" behaviour="move" :get-child-payload="getChildPayload" @drop="onDrop">-->
    <!--      <Draggable v-for="item in tracks" :key="item.id">-->
    <!--        <div class="draggable-item">-->
    <!--          {{ item.title }}-->
    <!--        </div>-->
    <!--      </Draggable>-->
    <!--    </Container>-->
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { mapActions } from 'vuex'
export default {
  name: 'Album',
  // eslint-disable-next-line vue/no-unused-components
  components: { Container, Draggable },
  async asyncData ({ $axios, store, params }) {
    // https://***REMOVED***/api/album/4b546861fec61762dc0ad781801cd9b4
    const album = await $axios.$get(
      `api/album/${params.id}`
    )
    const tracks = await $axios.$get(
      // https://***REMOVED***/api/song?_end=0&_order=ASC&_sort=album&_start=0&album_id=4b546861fec61762dc0ad781801cd9b4
      `api/song/?_start=0&_end=0&_sort=album&album_id=${params.id}`
    )
    return { album, tracks }
  },
  head () {
    return {
      title: `Thunderdrome - ${this.album.name}`
    }
  },
  methods: {
    ...mapActions('albums', ['setRating']),
    ...mapActions('player', [
      'appendToPlaylist',
      'startPlaylist'
    ]),
    updateRating (id, rating) {
      this.setRating({ id, rating })
        .then(() => this.$buefy.toast.open({
          type: 'is-dark',
          message: 'Rating updated'
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Failed to update rating'
        }))
    },
    getChildPayload (index) {
      return this.tracks[index]
    },
    onDrop (dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult
      if (removedIndex === null && addedIndex === null) { return this.tracks }

      const result = [...this.tracks]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      this.tracks = result
    }
  }
}
</script>

<style scoped>

</style>
