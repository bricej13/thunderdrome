<template>
  <div class="pt-2-tablet">
    <div class="block px-2-tablet">
      <div class="columns">
        <div class="column is-one-quarter-tablet">
          <figure class="image">
            <img height="128" width="128" :alt="artist.name" :src="artist.largeImageUrl || '/microphone-alt.png'">
          </figure>
        </div>
        <div class="column px-2">
          <div class="title is-size-1">
            {{ artist.name }}
          </div>
          <div class="subtitle is-size-5 mb-2">
            <a @click.prevent="toggleArtistFavorite(artist)">
              <ion-icon :name="artist.starred ? 'heart' : 'heart-outline'" />
            </a>
            {{ artist.albumCount }} Albums <span class="has-text-weight-light"> · </span> {{ artist.songCount }} Tracks
          </div>
          <b-rate v-model="artist.rating" @change="updateRating(artist.id, $event)" />
        </div>
      </div>
    </div>
    <div class="block px-2" v-html="artist.biography" />
    <div class="block px-2">
      <div class="is-size-3">
        Albums
      </div>
      <album-list-tiles :albums="albums" subtitle-property="minYear" />
    </div>
    <div class="block">
      <div class="level px-2">
        <div class="is-size-3">
          Tracks
        </div>
        <play-controls :tracks="tracks" />
      </div>
      <track-list :tracks="tracks" :hide-fields="['artist', 'delete']" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Artist',
  async asyncData ({ $axios, store, params }) {
    const [artist, allTracks, albums] = await Promise.all([
      store.dispatch('artists/get', params.id),
      store.dispatch('artists/getTracks', params.id),
      store.dispatch('artists/getAlbums', params.id)])
    const tracks = allTracks.reduce((acc, cur) => {
      if (!acc.find(t => t.albumId === cur.albumId && t.trackNumber === cur.trackNumber)) {
        acc.push(cur)
      }
      return acc
    }, [])
    return { artist, albums, tracks }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  },
  mounted () {
    if (this.artist.externalInfoUpdatedAt === '0001-01-01T00:00:00Z') {
      this.$store.dispatch('artists/loadExternalBio', this.artist.id)
        .then(() => this.$store.dispatch('artists/get', this.artist.id).then((res) => {
          this.artist = res
        }))
    }
  },
  methods: {
    ...mapActions(['setRating', 'setFavorite']),
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
    toggleArtistFavorite (artist) {
      this.setFavorite({ id: artist.id, isFavorite: !artist.starred })
        .then(() => {
          artist.starred = !artist.starred
        })
    }
  }
}
</script>

<style scoped>

</style>
