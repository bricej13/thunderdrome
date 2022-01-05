<template>
  <div>
    <b-field label="Media Cache Size">
      <b-slider
        :value="cacheSize"
        :min="0"
        :max="quota"
        :step="1048576 * 16"
        indicator
        :tooltip="false"
        :custom-formatter="(val) => (val / (1048576)).toFixed(0) + ' MB'"
        @change="$store.dispatch('settings/setCacheSize', $event)"
      />
    </b-field>
    <div class="columns">
      <div class="column">
        <b-field label="Cache Used">
          <b-progress format="percent" :value="(usage / cacheSize) * 100" show-value />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Tracks cached">
          {{ cachedTrackCount }}
        </b-field>
      </div>
      <div class="column has-text-right">
        <b-button size="" @click="clearCache">
          Clear
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CacheSettings',
  data () {
    return {
      quota: 1,
      usage: 1,
      details: {
        indexedDB: 1
      },
      cachedTrackCount: 0
    }
  },
  computed: {
    ...mapGetters('settings', ['cacheSize'])
  },
  created () {
    this.refreshStorage()
    this.getCachedTracks()
  },
  methods: {
    ...mapActions('settings', ['setCacheSize']),
    clearCache () {
      this.$db.tracks.clear().then(() => {
        this.refreshStorage()
        this.getCachedTracks()
      })
    },
    refreshStorage () {
      if (navigator.storage) {
        navigator.storage.estimate().then((r) => {
          this.quota = r.quota
          this.usage = r.usage
          this.details = r.usageDetails
        })
      }
    },
    async getCachedTracks () {
      this.cachedTrackCount = await this.$db.tracks.count()
    }
  }
}
</script>

<style scoped>

</style>
