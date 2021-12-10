<template>
  <section class="p-2">
    <div v-if="recentlyPlayedAlbums.length > 0" class="block">
      <div class="title is-size-2">
        Recently Played
      </div>
      <album-list-tiles :albums="recentlyPlayedAlbums" />
    </div>
    <div v-if="mostPlayedAlbums.length > 0" class="block">
      <div class="title is-size-2">
        Most Played
      </div>
      <album-list-tiles :albums="mostPlayedAlbums" />
    </div>
    <div v-if="topRatedAlbums.length > 0" class="block">
      <div class="title is-size-2">
        Top Rated
      </div>
      <album-list-tiles :albums="topRatedAlbums" />
    </div>
    <div v-if="recentlyAddedAlbums.length > 0" class="block">
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
  async asyncData ({ $api }) {
    const [recentlyPlayedAlbums, mostPlayedAlbums, topRatedAlbums, recentlyAddedAlbums] =
    await Promise.all(
      [
        $api.album.where({ _start: 0, _end: 8, _order: 'DESC', _sort: 'play_date', recently_played: true }),
        $api.album.where({ _start: 0, _end: 8, _order: 'DESC', _sort: 'play_count', recently_played: true }),
        $api.album.where({ _start: 0, _end: 12, _order: 'DESC', _sort: 'rating', has_rating: true }),
        $api.album.where({ _start: 0, _end: 12, _order: 'DESC', _sort: 'recently_added' })
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
     background-color: $color4;
     color: $text-invert;
   }
}
</style>
