<template>
  <section class="section">
    <h1>Albums</h1>
    <pre>{{ $route.query }}</pre>
    <div class="columns is-multiline">
      <album v-for="album in albums" :key="album.id" class="col-2" :album="album" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Albums',
  data () {
    return {
      albums: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      this.albums = await this.$axios.$get(
        '/api/album?_end=12&_order=ASC&_sort=name&_start=0'
      )
    }
  }
}
</script>

<style scoped>

</style>
