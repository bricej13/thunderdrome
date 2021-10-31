<template>
  <div>
    <div class="title">
      Albums
    </div>
    <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
      <NuxtLink v-for="album in albums" :key="album.id" :to="{name: 'albums-id', params: {id: album.id}}">
        <div class="album column">
          <album-art :album="album" />
          <div class="is-uppercase is-size-7">
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
.album {
  &:hover {
     background-color: $ui3-beet;
     color: $white;
   }
}

</style>
