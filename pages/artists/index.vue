<template>
  <section class="">
    <b-table
      :data="artists"
      paginated
      :page-size="20"
      :current-page.sync="page"
      pagination-position="top"
      pagination-simple
    >
      <template #top-left>
        <div class="title">
          Artists
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
import { mapGetters } from 'vuex'

export default {
  name: 'Artists',
  data () {
    return {
      sortField: 'vote_count',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      page: 1,
      perPage: 20
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Artists'
    }
  },
  mounted () {
    this.$store.dispatch('artists/loadArtists')
  },
  computed: {
    ...mapGetters('artists', [
      'artists', 'total', 'loading'
    ])
  },
  methods: {
    onPageChange (page) {
      // this.page = page
      console.log(page)
    }
  }

}
</script>

<style scoped>

</style>
