<template>
  <figure class="image is-128x128">
    <img :src="coverArt">
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
