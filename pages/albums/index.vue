<template>
  <div class="p-2">
    <div>
      <div class="title">
        Albums
      </div>
    </div>
    <album-list-tiles :albums="albums" />
    <infinite-loading spinner="waveDots" :distance="500" force-use-infinite-wrapper=".page-content" @infinite="fetchData">
      <div slot="no-more">
        you've reached the end
      </div>
      <div slot="no-results">
        No Albums Found
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Albums',
  components: { InfiniteLoading },
  async asyncData ({ query, $axios }) {
    const albums = await $axios.$get(
      '/api/album', {
        params: Object.assign({
          _start: 0, _end: 20, _order: 'ASC', _sort: 'name'
        }, query)
      }
    )
    const pageSize = (query._end - query._start) || 20
    return { albums, pageSize }
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Albums'
    }
  },
  methods: {
    async fetchData ($state) {
      const newAlbums = await this.getAlbums({
        _start: this.albums.length, _end: this.albums.length + this.pageSize
      })
      this.albums.push(...newAlbums)
      if (newAlbums.length === this.pageSize) {
        $state.loaded()
      } else {
        $state.complete()
      }
    },
    async getAlbums (queryParams) {
      const params = Object.assign({
        _start: 0, _end: 20, _order: 'ASC', _sort: 'name'
      }, queryParams)
      return await this.$axios.$get(
        '/api/album', { params }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

</style>
