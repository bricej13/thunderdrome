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
            <genre-tags :genres="album.genres" link-to="albums" />
          </div>
        </div>
        <div class="column is-narrow p-4">
          <play-controls :tracks="tracks" />
        </div>
      </div>
    </div>
    <div class="is-flex is-flex-direction-column" style="row-gap: 24px;">
      <div v-for="(discTracks, discNumber) in discs" :key="discNumber">
        <color-header v-if="multiDisc" :i="discNumber -1">
          <div class="px-3 py-0 is-size-4">
            Disc {{ discNumber }}
          </div>
        </color-header>
        <track-list :tracks="discTracks" :hide-fields="['artist', 'album', 'delete']" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Album',
  async asyncData ({ $api, params }) {
    const [album, { tracks }] = await Promise.all([
      $api.album.get(params.id),
      $api.album.tracks(params.id)
    ])
    const dedupedTracks = tracks.reduce((acc, cur) => {
      if (!acc.find(t => t.trackNumber === cur.trackNumber && t.discNumber === cur.discNumbe)) {
        acc.push(cur)
      }
      return acc
    }, [])

    const discs = dedupedTracks.reduce((acc, cur) => {
      if (!acc[cur.discNumber]) {
        acc[cur.discNumber] = []
      }
      acc[cur.discNumber].push(cur)
      return acc
    }, {})
    return { album, tracks: dedupedTracks, discs }
  },
  head () {
    return {
      title: `Thunderdrome - ${this.album.name}`
    }
  },
  computed: {
    multiDisc () {
      return Object.keys(this.discs).length > 1
    }
  },
  methods: {
    ...mapActions('player', ['appendToPlaylist', 'startPlaylist']),
    toggleAlbumFavorite () {
      this.$api.setFavorite(this.album.id, !this.album.starred)
        .then(() => {
          this.album.starred = !this.album.starred
        })
    },
    toggleTrackFavorite (i) {
      this.$api.setFavorite(this.tracks[i].id, !this.tracks[i].starred)
        .then(() => {
          this.tracks[i].starred = !this.tracks[i].starred
        })
    },
    updateRating (id, rating) {
      this.$api.setRating(id, rating)
        .then(() => this.$buefy.toast.open({
          type: 'is-text',
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
