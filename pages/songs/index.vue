<template>
  <section class="">
    <b-table
      :data="tracks"
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
            Tracks
          </div>
        </div>
      </template>
      <template #top-right>
        <div class="">
          <button class="btn">
            <ion-icon name="chevron-back" />
          </button>
        </div>
      </template>
      <b-table-column v-slot="props" sortable label="Title" field="title">
        <NuxtLink :to="`/albums/${props.row.albumId}`">
          {{ props.row.title }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Artist" field="artistId">
        <NuxtLink :to="`/artists/${props.row.artistId}`">
          {{ props.row.artist }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Album" field="album">
        <NuxtLink :to="`/albums/${props.row.albumId}`">
          {{ props.row.album }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Year" field="year">
        {{ props.row.year }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Plays" field="playCount">
        {{ props.row.playCount }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Time" field="duration">
        {{ props.row.duration | tracktime }}
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Bit Rate" field="bitRate">
        <bitrate :bit-rate="props.row.bitRate" :suffix="props.row.suffix" />
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Rating" field="rating">
        <b-rate v-model="props.row.rating" @change="updateRating(props.row.id, $event)" />
      </b-table-column>
      <b-table-column v-slot="props" width="0" sortable label="Favorite" field="starred">
        <a @click.prevent="toggleTrackFavorite(props.row)">
          <ion-icon :name="props.row.starred ? 'heart' : 'heart-outline'" />
        </a>
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'Songs',
  async asyncData ({ query, $api }) {
    const pageSize = query._end - query._start || 20
    const page = query._end / pageSize || 1
    const { tracks, total } = await $api.track.all(query)
    return { tracks, pageSize, page, total }
  },
  head () {
    return {
      title: 'Thunderdrome - Songs'
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
    toggleTrackFavorite (track) {
      this.$api.setFavorite(track.id, !track.starred)
        .then(() => {
          track.starred = !track.starred
        })
    }
  }

}
</script>

<style scoped>

</style>
