<template>
  <div>
    <div class="columns">
      <div class="column">
        <b-field label="Scrobble at" message="Scrobble when songs are what % complete?">
          <b-slider
            :value="scrobbleAt"
            :min="0"
            :max="1"
            :step=".01"
            indicator
            :tooltip="false"
            :custom-formatter="(val) => (val * 100).toFixed(0) + '%'"
            @change="setScrobbleAt"
          />
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PlayerSettings',
  computed: {
    ...mapGetters('settings', ['scrobbleAt'])
  },
  methods: {
    ...mapActions('settings', ['setScrobbleAt'])
  }
}
</script>

<style scoped>

</style>
