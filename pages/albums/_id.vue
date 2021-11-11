<template>
  <div>
    <div class="columns block mb-4 px-2-tablet">
      <div class="column is-one-quarter-tablet">
        <album-art :album="album" />
      </div>
      <div class="column columns is-mobile">
        <div class="column">
          <div class="title is-size-1">
            {{ album.name }}
          </div>
          <div class="subtitle is-3 mb-2">
            <NuxtLink :to="{name: 'artists-id', params: {id: album.artistId}}">
              {{ album.artist }}
            </NuxtLink>
          </div>
          <div>
            <b-rate v-model="album.rating" @change="updateRating(album.id, $event)" />
          </div>
        </div>
        <div class="column is-narrow">
          <play-controls :tracks="tracks" />
        </div>
      </div>
    </div>
    <div class="block">
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
              <b-rate v-model="track.rating" size="is-small" @change="updateRating(track.id, $event)" />
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Album',
  async asyncData ({ $axios, store, params }) {
    const [album, tracks] = await Promise.all([
      store.dispatch('albums/get', params.id),
      store.dispatch('albums/getTracks', params.id)
    ])
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
