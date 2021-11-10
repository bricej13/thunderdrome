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
      :total="total"
      :current-page.sync="page"
      pagination-position="top"
      pagination-simple
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
            <b-icon icon="angle-left" />
          </button>
        </div>
      </template>
      <b-table-column v-slot="props" label="Artist" field="name">
        <NuxtLink :to="`/artists/${props.row.id}`">
          {{ props.row.name }}
        </NuxtLink>
      </b-table-column>
      <b-table-column v-slot="props" label="Album Count" field="albumCount">
        {{ props.row.albumCount }}
      </b-table-column>
      <b-table-column v-slot="props" label="Plays" field="playCount">
        {{ props.row.albumCount }}
      </b-table-column>
      <b-table-column v-slot="props" label="Rating" field="rating">
        {{ props.row.rating }}
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'Artists',
  async asyncData ({ $axios, query }) {
    console.log('async data')
    const pageSize = query._end - query._start || 20
    const page = query._end / pageSize || 1
    const artists = await $axios.$get(
      'api/artist', {
        params: Object.assign({ _start: 0, _end: 10, _order: 'ASC', _sort: 'name' }, query)
      })
    const total = artists.length === pageSize ? pageSize * (page + 1) : Number(query._start) + artists.length
    return { artists, pageSize, page, total }
  },
  data () {
    return {
      sortField: 'vote_count',
      sortOrder: 'desc',
      defaultSortOrder: 'desc'
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  },
  computed: {
  },
  watchQuery: true,
  methods: {
    onPageChange (page) {
      const query = Object.assign({}, this.$route.query, {
        _start: (page - 1) * this.pageSize,
        _end: page * this.pageSize
      })
      console.log(page, { name: 'artists', query })
      this.$router.replace({ query })
    }
  }

}
</script>

<style scoped>

</style>
