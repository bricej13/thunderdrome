<template>
  <div class="is-flex is-flex-direction-column gap-6 pt-2">
    <section class="px-2 is-flex is-flex-row gap-4">
      <figure class="image is-128x128">
        <img height="128" width="128" :alt="artist.name" :src="artist.largeImageUrl">
      </figure>
      <div>
        <div class="title is-size-1">
          {{ artist.name }}
        </div>
        <div class="subtitle is-size-5 mb-2">
          {{ artist.albumCount }} Albums <span class="has-text-weight-light"> · </span> {{ artist.songCount }} Tracks
        </div>
        <b-rate v-model="artist.rating" @change="updateRating(artist.id, $event)" />
      </div>
    </section>
    <section class="px-2">
      <div class="is-size-3">
        Albums
      </div>
      <album-list-tiles :albums="albums" subtitle-property="minYear" />
    </section>
    <section>
      <div class="level px-2">
        <div class="is-size-3">
          Tracks
        </div>
        <play-controls :tracks="tracks" />
      </div>
      <track-list :tracks="tracks" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Id',
  async asyncData ({ $axios, store, params }) {
    const [artist, tracks, albums] = await Promise.all([
      store.dispatch('artists/get', params.id),
      store.dispatch('artists/getTracks', params.id),
      store.dispatch('artists/getAlbums', params.id)])
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
    ...mapActions('albums', ['setRating']),
    updateRating (id, rating) {
      this.setRating({ id, rating })
        .then(() => this.$buefy.toast.open({
          type: 'is-dark',
          message: 'Rating updated'
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Failed to update rating'
        }))
    }
  }
}
</script>

<style scoped>

</style>
