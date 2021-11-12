<template>
  <section class="p-2">
    <div class="block">
      <div class="title is-size-2">
        Recently Played
      </div>
      <album-list-tiles :albums="recentlyPlayedAlbums" />
    </div>
    <div class="block">
      <div class="title is-size-2">
        Most Played
      </div>
      <album-list-tiles :albums="mostPlayedAlbums" />
    </div>
    <div class="block">
      <div class="title is-size-2">
        Top Rated
      </div>
      <album-list-tiles :albums="topRatedAlbums" />
    </div>
    <div class="block">
      <div class="title is-size-2">
        Recently Added
      </div>
      <album-list-tiles :albums="recentlyAddedAlbums" />
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  async asyncData (ctx) {
    const [recentlyPlayedAlbums, mostPlayedAlbums, topRatedAlbums, recentlyAddedAlbums] =
    await Promise.all(
      [
        ctx.$axios.$get('/api/album?_end=8&_order=DESC&_sort=play_date&_start=0&recently_played=true'),
        ctx.$axios.$get('/api/album?_end=8&_order=DESC&_sort=play_count&_start=0&recently_played=true'),
        ctx.$axios.$get('/api/album?_end=12&_order=DESC&_sort=rating&_start=0&has_rating=true'),
        ctx.$axios.$get('/api/album?_end=12&_order=DESC&_sort=recently_added&_start=0')
      ]
    )

    return { recentlyPlayedAlbums, mostPlayedAlbums, topRatedAlbums, recentlyAddedAlbums }
  }

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";
.album-link {
  transition: background-color 200ms, color 200ms;
  flex-basis: 0;
  &:hover {
     background-color: $ui3-beet;
     color: $white;
   }
}
</style>
