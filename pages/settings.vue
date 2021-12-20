<template>
  <div class="p-2">
    <div class="title">
      Settings
    </div>
    <section class="container">
      <color-header :i="0" class="mt-5 mb-4">
        Server
      </color-header>
      <div class="block columns">
        <div class="column">
          <b-field label="Server Version">
            <div class="control">
              {{ serverStatus.version }}
            </div>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Uptime">
            <div class="control" :title="serverStatus.startTime">
              {{ uptime }}
            </div>
          </b-field>
        </div>
      </div>
    </section>
    <section class="container">
      <color-header :i="1" class="mt-5 mb-4">
        Library
      </color-header>
      <div class="block columns">
        <div class="column">
          <b-field label="Folders">
            <div class="control">
              {{ scanStatus.folderCount }}
            </div>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Tracks">
            <div class="control">
              {{ scanStatus.count }}
            </div>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Scan">
            <div class="buttons is-grouped">
              <b-button :loading="$store.getters.scanStatus.scanning" @click="startScan(false)">
                Quick
              </b-button>
              <b-button :loading="$store.getters.scanStatus.scanning" @click="startScan(true)">
                Full
              </b-button>
            </div>
          </b-field>
        </div>
      </div>
    </section>
    <section class="container">
      <color-header :i="2" class="mt-5 mb-4">
        Equalizer
      </color-header>
      <equalizer />
    </section>
    <section class="container">
      <color-header :i="3" class="mt-5 mb-4">
        Player Settings
      </color-header>
      <div class="columns">
        <div class="column">
          <player-settings />
        </div>
        <div class="column">
          <cache-settings />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field has-addons label="Logo RPM">
            <p class="control">
              <button
                class="button"
                :class="{'is-text': logoSpeed === ''}"
                @click="$store.commit('settings/setLogoSpeed', '')"
              >
                Disabled
              </button>
            </p>
            <p class="control">
              <button
                class="button"
                :class="{'is-text': logoSpeed === 'thirty-three'}"
                @click="$store.commit('settings/setLogoSpeed', 'thirty-three')"
              >
                33 ⅓
              </button>
            </p>
            <p class="control">
              <button
                class="button"
                :class="{'is-text': logoSpeed === 'fourty-five'}"
                @click="$store.commit('settings/setLogoSpeed', 'fourty-five')"
              >
                45
              </button>
            </p>
            <p class="control">
              <button
                class="button"
                :class="{'is-text': logoSpeed === 'seventy-eight'}"
                @click="$store.commit('settings/setLogoSpeed', 'seventy-eight')"
              >
                78
              </button>
            </p>
          </b-field>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDuration, intervalToDuration } from 'date-fns'

export default {
  name: 'Settings',
  data () {
    return {
      uptimeInterval: null,
      uptime: null
    }
  },
  computed: {
    ...mapGetters(['scanStatus', 'serverStatus']),
    ...mapGetters('settings', ['logoSpeed'])
  },
  watch: {
    serverStatus (serverStatus) {
      this.setupInterval(serverStatus)
    }
  },
  mounted () {
    this.setupInterval(this.serverStatus)
  },
  destroyed () {
    clearInterval(this.uptimeInterval)
  },
  methods: {
    startScan (fullScan) {
      this.$api.startScan(fullScan)
    },
    setupInterval (serverStatus) {
      if (serverStatus.startTime != null) {
        this.uptime = this.calcUptime(serverStatus.startTime)
        this.uptimeInterval = setInterval(function () {
          this.uptime = this.calcUptime(serverStatus.startTime)
        }.bind(this), 1000)
      }
    },
    calcUptime (startTime) {
      const dur = intervalToDuration({ start: startTime, end: new Date() })
      return formatDuration(dur, { format: ['years', 'months', 'days', 'hours', 'minutes'] })
    }
  }
}
</script>

<style scoped>

</style>
