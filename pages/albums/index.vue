<template>
  <div>
    <div class="title">
      Albums
    </div>
    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around">
      <NuxtLink
        v-for="album in albums"
        :key="album.id"
        :to="{name: 'albums-id', params: {id: album.id}}"
        class="flex-grow-1 is-block is-flex is-flex-direction-row is-justify-content-center py-4 px-2 album-link"
      >
        <div class="album">
          <album-art :album="album" />
          <div class="is-uppercase title has-text-weight-semibold is-size-6">
            {{ album.name }}
          </div>
          <div class="subtitle is-size-7">
            {{ album.artist }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlbumArt from '~/components/AlbumArt'
export default {
  name: 'Albums',
  components: { AlbumArt },
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Albums'
    }
  },
  computed: {
    ...mapGetters('albums', [
      'albums'
    ])
  },
  mounted () {
    this.$store.dispatch('albums/loadAlbums')
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.album-link {
  transition: background-color 200ms, color 200ms;
  flex-basis: 0;
  &:hover {
    background-color: $ui3-beet;
    color: $white;
  }
}

</style>
