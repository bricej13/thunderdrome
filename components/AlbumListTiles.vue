<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="(album, i) in albums"
      :key="album.id + i"
      class="column is-4-mobile is-3-tablet is-2-widescreen"
    >
      <NuxtLink
        :to="{name: 'albums-id', params: {id: album.id}}"
        class="album-link"
      >
        <div class="album">
          <album-art :album="album" />
          <div class="is-uppercase title has-text-weight-semibold is-size-6">
            {{ album.name }}
          </div>
          <div class="subtitle is-size-7">
            {{ album[subtitleProperty] }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumListTiles',
  props: {
    albums: {
      type: Array,
      required: true
    },
    subtitleProperty: {
      type: String,
      default: () => 'artist'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

.album-link {
  transition: background-color 200ms, color 200ms;
  flex-basis: 0;

  &:hover {
    .title, .subtitle {
      color: $primary;
      text-decoration: $primary underline;
    }
  }
}

</style>
