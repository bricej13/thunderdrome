<template>
  <div class="p-2">
    <div>
      <div class="level">
        <div class="title">
          Albums
        </div>

        <b-tag
          v-if="$route.query.genre_id"
          size="is-medium"
          type="is-yellow"
          closable
          attached
          @close="removeGenre"
        >
          {{ $store.getters.genre($route.query.genre_id).name }}
        </b-tag>
      </div>
    </div>
    <album-list-tiles :albums="albums" />
    <infinite-loading spinner="waveDots" :identifier="$route.query" :distance="500" force-use-infinite-wrapper=".page-content" @infinite="fetchData">
      <div slot="no-more">
        <div class="py-6">
          you've reached the end
        </div>
      </div>
      <div slot="no-results">
        <div class="py-6">
          No Albums Found
        </div>
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Albums',
  components: { InfiniteLoading },
  layout: 'responsive',
  async asyncData ({ query, $api }) {
    const pageSize = (query._end - query._start) || 20
    const albums = await $api.album.where(query)
    return { pageSize, albums }
  },
  data () {
    return {
      albums: []
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Albums'
    }
  },
  watchQuery: true,
  methods: {
    async fetchData ($state) {
      const newAlbums = await this.getAlbums({
        _start: this.albums.length, _end: this.albums.length + this.pageSize
      })
      this.albums.push(...newAlbums)
      if (newAlbums.length === 0) {
        $state.complete()
      } else {
        $state.loaded()
      }
    },
    async getAlbums (queryParams) {
      const params = Object.assign({}, this.$route.query, queryParams)
      return await this.$api.album.where(params)
    },
    removeGenre () {
      // eslint-disable-next-line camelcase
      const { genre_id, ...newQuery } = this.$route.query
      this.$router.push({ name: 'albums', query: newQuery })
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
.infinite-status-prompt .loading-wave-dots {
  animation: unhide 0s ease-in 2s forwards;
  -webkit-animation: unhide 0s ease-in 2s forwards;
  opacity: 0;
}

@-webkit-keyframes unhide {
  to {
    opacity: 1
  }
}
@keyframes unhide {
  to {
    opacity: 1
  }
}

</style>
