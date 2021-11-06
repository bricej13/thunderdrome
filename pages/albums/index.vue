<template>
  <div>
    <div class="p-2">
      <div class="title">
        Albums
      </div>
    </div>
    <album-list-tiles :albums="albums" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Albums',
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

</style>
