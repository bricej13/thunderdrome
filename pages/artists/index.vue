<template>
  <section class="">
    <div class="title">
      Artists
    </div>
    <b-table
      :data="data"
      :loading="loading"
      per-page="20"
      paginated
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @page-change="onPageChange"
    >
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
  // async asyncData ({ $axios, store, params }) {
  //   const artists = await $axios.$get(
  //     // `api/playlist/${params.id}/tracks`
  //     'api/artist?_end=15&_order=ASC&_sort=name&_start=0'
  //   )
  //   return { artists }
  // },
  data () {
    return {
      data: [],
      total: 0,
      loading: false,
      sortField: 'vote_count',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      page: 1,
      perPage: 20
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    async loadData () {
      this.loading = true
      const artists = await this.$axios.$get(
        'api/artist?_start=0&_order=ASC&_sort=name'
      )
      this.loading = false
      this.data = artists
      this.total = artists.length
    },
    onPageChange (page) {
      this.page = page
      this.loadData()
    }
  }

}
</script>

<style scoped>

</style>
