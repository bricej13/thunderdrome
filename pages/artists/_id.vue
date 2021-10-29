<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'Id',
  async asyncData ({ $axios, store, params }) {
    '/rest/getArtistInfo?u=***REMOVED***&t=5f24cb316cc29ee8b70c6f99c6e50a2c&s=bc2671&f=json&v=1.8.0&c=NavidromeUI&id=ff9f90893603fffc16cffa8d11c8292c'
    const tracks = await $axios.$get(
      `api/playlist/${params.id}/tracks`
    )
    return { tracks }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  }
}
</script>

<style scoped>

</style>
