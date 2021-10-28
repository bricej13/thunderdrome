<template>
  <div class="audio-player">
    <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
      <div class="pl-4 p-2">
        <figure class="image is-64x64">
          <img :src="albumArt">
        </figure>
      </div>
      <div class="px-2">
        <div v-if="currentTrack">
          <div class="is-size-6 is-uppercase has-text-weight-bold" style="line-height: 1.5rem">
            {{ currentTrack.title }}
          </div>
          <div class="is-size-7">
            {{ currentTrack.artist }}
          </div>
        </div>
      </div>

      <div class="is-flex-grow-1 px-2">
        <progress-bar :value="progress" />
      </div>

      <div class="px-2 has-text-grey">
        {{ currentTime | tracktime }} / {{ duration | tracktime }}
      </div>

      <div class="pl-2 pr-4">
        <div class="level">
          <div class="p-1" :disabled="!hasPrev" @click="$store.commit('player/prevTrack')">
            <b-icon
              icon="skip-previous"
            />
          </div>

          <div
            class="p-1"
            @click="togglePlay"
          >
            <b-icon
              :icon="playing ? 'pause' : 'play'"
              size="is-large"
            />
          </div>
          <div class="p-1" :disabled="!hasNext" @click="$store.commit('player/nextTrack')">
            <b-icon
              icon="skip-next"
            />
          </div>
        </div>
      </div>
    </div>
    <audio
      ref="player"
      autoplay
      :src="currentStream"
      @playing="$store.commit('player/setPlay', true)"
      @play="$store.commit('player/setPlay', true)"
      @pause="$store.commit('player/setPlay', false)"
      @timeupdate="$store.commit('player/setCurrentTime', $refs.player.currentTime)"
      @durationchange="$store.commit('player/setTrackDuration', $refs.player.duration)"
      @error="log('error', $event)"
      @load="log('load', $event)"
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AudioPlayer',
  data () {
    return {}
  },
  computed: {
    ...mapGetters('player', [
      'i',
      'currentTrack',
      'currentStream',
      'streamList',
      'hasNext',
      'hasPrev',
      'currentTime',
      'duration',
      'progress',
      'playing',
      'albumArt'
    ])
  },
  methods: {
    togglePlay () {
      this.playing
        ? this.$refs.player.pause()
        : this.$refs.player.play()
    },
    log (type, event) {
      // console.log(type, event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.audio-player {
  background-color: $background;
  border-top: 2px solid black;
  width: 100%;
}

</style>
