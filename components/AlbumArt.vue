<template>
  <figure class="image">
    <img :src="coverArt" :alt="`${album.artist} - ${album.name}`">
  </figure>
</template>

<script>
export default {
  name: 'AlbumArt',
  props: {
    album: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 128
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
@import "~/assets/scss/colors.scss";

</style>
