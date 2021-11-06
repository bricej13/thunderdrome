<template>
  <figure class="image is-128x128">
    <img height="128" width="128" :src="coverArt" :alt="`${album.artist} - ${album.name}`">
  </figure>
</template>

<script>
export default {
  name: 'AlbumArt',
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    coverArt () {
      return `${this.$store.getters['user/subsonicUrl']('getCoverArt')}&id=${this.album.id}&size=300`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

</style>
