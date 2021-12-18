<template>
  <div class="pt-2-tablet">
    <div class="block px-2-tablet">
      <!--      <div v-if="banner">-->
      <!--        <img :src="banner">-->
      <!--      </div>-->
      <div class="columns">
        <div class="column is-one-third-tablet">
          <figure class="image">
            <img height="128" width="128" :alt="artist.name" :src="thumb || artist.largeImageUrl || '/microphone-alt.png'">
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
          <genre-tags :genres="artist.genres" link-to="artists" />
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
      <track-list :tracks="tracks" :hide-fields="['artist', 'delete', 'trackNumber']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  async asyncData ({ $api, params, $fanart }) {
    const [artist, tracks, albums] = await Promise.all([
      $api.artist.get(params.id),
      $api.artist.tracks(params.id),
      $api.artist.albums(params.id)
    ])
    return { artist, albums, tracks }
  },
  data () {
    return {
      background: null,
      logo: null,
      thumb: null,
      banner: null
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  },
  mounted () {
    if (this.artist.externalInfoUpdatedAt === '0001-01-01T00:00:00Z') {
      this.$api.artist.loadExternalBio(this.artist.id)
        .then(() => this.$api.artist.get(this.artist.id).then((res) => {
          this.artist = res
          this.loadFanart()
        }))
    }
    this.loadFanart()
  },
  methods: {
    async loadFanart () {
      if (this.artist.mbzArtistId) {
        const fanart = await this.$fanart.artist.get(this.artist.mbzArtistId)
        if (fanart.musicbanner) {
          this.banner = fanart.musicbanner[0].url
        }
        if (fanart.artistbackground) {
          this.background = fanart.artistbackground[0].url
        }
        if (fanart.hdmusiclogo) {
          this.logo = fanart.hdmusiclogo[0].url
        } else if (fanart.musiclogo) {
          this.logo = fanart.musiclogo[0].url
        }
        if (fanart.artistthumb) {
          this.thumb = fanart.artistthumb[0].url
        }
      }
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
    toggleArtistFavorite (artist) {
      this.$api.setFavorite(artist.id, !artist.starred)
        .then(() => {
          artist.starred = !artist.starred
        })
    }
  }
}
</script>

<style scoped>

</style>
