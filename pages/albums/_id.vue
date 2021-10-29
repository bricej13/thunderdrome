<template>
  <div>
    <div class="is-flex is-flex-direction-row is-align-items-start">
      <div class="">
        <album-art :album="album" />
      </div>
      <div class="is-flex-grow-1 pl-1">
        <div class="title is-size-1">
          {{ album.name }}
        </div>
        <div class="subtitle is-3">
          {{ album.artist }}
        </div>
      </div>
      <div class="">
        <play-controls :tracks="tracks" />
      </div>

    <!--    <pre>{{ album }}</pre>-->
    </div>
    <track-list :tracks="tracks" />
  </div>
</template>

<script>
export default {
  name: 'Album',
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
  }
}
</script>

<style scoped>

</style>
