<template>
  <div class="p-2">
    <div class="is-flex is-flex-row gap-4 mb-4">
      <figure class="image is-128x128">
        <img height="128" width="128" :alt="artist.name" :src="artist.largeImageUrl">
      </figure>
      <div>
        <div class="title is-size-1">
          {{ artist.name }}
        </div>
        <div class="subtitle is-size-5">
          {{ artist.albumCount }} Albums <span class="has-text-weight-light">|</span> {{ artist.songCount }} Tracks
        </div>
      </div>
    </div>
    <div>
      <div class="is-size-3">
        Albums
      </div>
      <album-list-tiles :albums="albums" subtitle-property="minYear" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Id',
  async asyncData ({ $axios, store, params }) {
    // '/rest/getArtistInfo?u=***REMOVED***&t=5f24cb316cc29ee8b70c6f99c6e50a2c&s=bc2671&f=json&v=1.8.0&c=NavidromeUI&id=ff9f90893603fffc16cffa8d11c8292c'
    // artist:  https://***REMOVED***/api/artist/307626e70fbbed31b96072543be71667
    // albums:  https://***REMOVED***/api/album?_end=0&_order=ASC&_sort=maxYear&_start=0&artist_id=307626e70fbbed31b96072543be71667
    // tracks: https://***REMOVED***/api/song?_end=0&_order=ASC&_sort=album&_start=0&artist_id=8b0756051df1c62f7f256793af3d79df
    const artist = await $axios.$get(
      `api/artist/${params.id}`
    )
    const albums = await $axios.$get(
      `/api/album?_end=0&_order=ASC&_sort=maxYear&_start=0&artist_id=${params.id}`
    )
    // const tracks = await $axios.$get(
    //   `/api/song?_end=0&_order=ASC&_sort=maxYear&_start=0&artist_id=${params.id}`
    // )
    return { artist, albums }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  }
}
</script>

<style scoped>

</style>
