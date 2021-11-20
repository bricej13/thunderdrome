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
          <div class="is-size-5 has-text-grey has-text-weight-light">
            <a @click.prevent="toggleAlbumFavorite">
              <ion-icon :name="album.starred ? 'heart' : 'heart-outline'" />
            </a>

            <span>{{ album.minYear }}</span>
            ·
            <span>{{ album.songCount }} tracks </span>
            ·
            <span>{{ album.duration | playlisttime }}</span>
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
    <track-list :tracks="tracks" :hide-fields="['artist', 'album', 'delete']" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Album',
  async asyncData ({ $axios, store, params }) {
    const [album, allTracks] = await Promise.all([
      store.dispatch('albums/get', params.id),
      store.dispatch('albums/getTracks', params.id)
    ])
    const tracks = allTracks.reduce((acc, cur) => {
      if (!acc.find(t => t.trackNumber === cur.trackNumber)) {
        acc.push(cur)
      }
      return acc
    }, [])
    return { album, tracks }
  },
  head () {
    return {
      title: `Thunderdrome - ${this.album.name}`
    }
  },
  methods: {
    ...mapActions(['setRating', 'setFavorite']),
    ...mapActions('player', [
      'appendToPlaylist',
      'startPlaylist'
    ]),
    toggleAlbumFavorite () {
      this.setFavorite({ id: this.album.id, isFavorite: !this.album.starred })
        .then(() => {
          this.album.starred = !this.album.starred
        })
    },
    toggleTrackFavorite (i) {
      this.setFavorite({ id: this.tracks[i].id, isFavorite: !this.tracks[i].starred })
        .then(() => {
          this.tracks[i].starred = !this.tracks[i].starred
        })
    },
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
      if (removedIndex === null && addedIndex === null) {
        return this.tracks
      }

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
