<template>
  <section class="">
    <b-table
      :data="artists"
      paginated
      backend-pagination
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-size="pageSize"
      backend-sorting
      :default-sort-direction="$route.query._sort"
      :default-sort="[$route.query._sort, $route.query._order]"
      :total="total"
      sort-icon-size="is-small"
      :current-page.sync="page"
      pagination-position="top"
      pagination-simple
      @sort="onSort"
      @page-change="onPageChange"
    >
      <template #top-left>
        <div class="p-2">
          <div class="title">
            Artists
          </div>
        </div>
      </template>
      <template #top-right>
        <div class="">
          <button class="btn">
            <ion-icon name="shuffle" size="medium" />
          </button>
        </div>
      </template>
      <b-table-column v-slot="props" sortable label="Artist" field="name">
        <NuxtLink :to="`/artists/${props.row.id}`">
          {{ props.row.name }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Albums" field="albumCount">
        {{ props.row.albumCount }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Tracks" field="songCount">
        {{ props.row.songCount }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Plays" field="playCount">
        {{ props.row.playCount }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Rating" field="rating">
        <b-rate v-model="props.row.rating" @change="updateRating(props.row.id, $event)" />
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Fav" field="starred">
        <a @click.prevent="toggleArtistFavorite(props.row)">
          <ion-icon :name="props.row.starred ? 'heart' : 'heart-outline'" />
        </a>
      </b-table-column>
    </b-table>
  </section>
</template>

<script>

export default {
  name: 'Artists',
  async asyncData ({ $axios, query, $api }) {
    const pageSize = query._end - query._start || 20
    const page = query._end / pageSize || 1
    const artists = await $api.artist.where(query)
    const total = artists.length === pageSize ? pageSize * (page + 1) : Number(query._start) + artists.length
    return { artists, pageSize, page, total }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  },
  watchQuery: true,
  methods: {
    updateRating (id, rating) {
      this.$api.setRating(id, rating)
        .then(() => this.$buefy.toast.open({
          type: 'is-text',
          message: 'Rating updated'
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Failed to update rating'
        }))
    },
    onPageChange (page) {
      const query = Object.assign({}, this.$route.query, {
        _start: (page - 1) * this.pageSize,
        _end: page * this.pageSize
      })
      this.$router.replace({ query })
    },
    onSort (field, order) {
      const query = Object.assign({}, this.$route.query, {
        _order: order,
        _sort: field
      })
      this.$router.replace({ query })
    },
    toggleArtistFavorite (artist) {
      this.$api.setFavorite(artist.id, !artist.starred)
        .then(() => {
          artist.starred = !artist.starred
        })
    }
  }

}
</script>

<style scoped>

</style>
