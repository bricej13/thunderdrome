<template>
  <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start gap-5">
    <NuxtLink
      v-for="album in albums"
      :key="album.id"
      :to="{name: 'albums-id', params: {id: album.id}}"
      class="is-block is-flex is-flex-direction-row is-justify-content-center album-link"
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
@import "~/assets/scss/main.scss";

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
