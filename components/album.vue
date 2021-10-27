<template>
  <div class="is-1by1">
    <div class="card has-ratio">
      <div class="card-image">
        <figure class="image is-128x128">
          <img :src="coverArt">
        </figure>
      </div>
      <div class="card-content">
        <div>{{ album.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    coverArt () {
      // https://***REMOVED***/rest/getCoverArt?u=***REMOVED***&t=5f24cb316cc29ee8b70c6f99c6e50a2c&s=bc2671&f=json&v=1.8.0&c=NavidromeUI&
      // id=5334cc2490ddb2f85472e33f254e5543&size=300
      return `${this.$store.getters['user/subsonicUrl']('getCoverArt')}&id=${this.album.id}&size=300`
    }
  }
}
</script>

<style scoped>

</style>
