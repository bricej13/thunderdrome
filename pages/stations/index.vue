<template>
  <section class="">
    <div class="level p-2">
      <div class="title">
        Stations
      </div>
      <b-button class="button" @click="isCreateStationOpen = !isCreateStationOpen">
        <span v-if="!isCreateStationOpen">
          Add Station
        </span>
        <span v-else>
          Cancel
        </span>
      </b-button>
    </div>

    <b-collapse animation="slide" :open="isCreateStationOpen" class="px-2">
      <add-station-form v-if="isCreateStationOpen" @stationCreated="onStationCreated" />
    </b-collapse>
    <b-table
      :data="stations"
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
      pagination-position="bottom"
      pagination-simple
      @sort="onSort"
      @page-change="onPageChange"
    >
      <b-table-column v-slot="props" field="actions">
        <a class="column" @click="playPlaylist(props.row.id, false)">
          <ion-icon name="play" />
        </a>
      </b-table-column>
      <b-table-column v-slot="props" sortable label="Name" field="name">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column v-slot="props" label="Website" field="website">
        <a :href="props.row.homePageUrl" target="_blank">
          {{ props.row.homePageUrl }}
        </a>
      </b-table-column>
      <b-table-column v-slot="props" label="Streaming Url" field="stream-url">
        {{ props.row.streamUrl }}
      </b-table-column>
      <b-table-column v-slot="props" field="actions">
        <div class="columns">
          <a class="column" @click="onDelete(props.row.id)">
            <ion-icon name="trash-outline" />
          </a>
          <!--          <a class="column" @click="onEditStation(props.row)">-->
          <!--            <ion-icon name="settings-outline" />-->
          <!--          </a>-->
        </div>
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
import AddStationForm from '~/components/AddStationForm'

export default {
  name: 'Stations',
  async asyncData ({ query, $api }) {
    const pageSize = query._end - query._start || 20
    const page = query._end / pageSize || 1
    const { stations, total } = await $api.station.all(query)
    return { stations, pageSize, page, total }
  },
  data () {
    return {
      isCreateStationOpen: false
    }
  },
  head () {
    return {
      title: 'Thunderdrome - Stations'
    }
  },
  watchQuery: true,
  methods: {
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
    onDelete (stationId) {
      this.$api.station.delete(stationId)
        .then(() => {
          this.$nuxt.refresh()
          this.$buefy.toast.open({
            type: 'is-text',
            message: 'Station Deleted'
          })
        }).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Failed to delete station'
        }))
    },
    onStationCreated () {
      this.$nuxt.refresh()
      this.isCreateStationOpen = false
    },
    onEditStation (station) {
      console.log({ station })
      this.$buefy.modal.open({
        parent: this,
        props: { station },
        component: AddStationForm,
        trapFocus: true,
        customClass: 'custom-class custom-class-2'

      })
    }
  }

}
</script>

<style scoped>

</style>
