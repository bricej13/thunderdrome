<template>
  <div class="audio-player" :style="{'height': hasQueue ? 'auto' : 0}">
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

      <div class="is-flex-grow-1 px-2 is-flex is-flex-direction-column">
        <progress-bar :value="progress" />
        <div v-if="currentTrack">
          {{ currentTrack.mediaFileId }}
        </div>
      </div>

      <div class="px-2 has-text-grey">
        {{ currentTime | tracktime }} / {{ duration | tracktime }}
      </div>

      <div class="pl-2 pr-4">
        <div class="level">
          <div class="p-1 is-clickable" :disabled="!hasPrev" @click="prevTrack">
            <b-icon
              icon="skip-previous"
            />
          </div>

          <div
            class="p-1 is-clickable"
            @click="togglePlay"
          >
            <b-icon
              :icon="playing ? 'pause' : 'play'"
              size="is-large"
            />
          </div>
          <div class="p-1 is-clickable" :disabled="!hasNext" @click="nextTrack">
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
      @playing="setPlay(true)"
      @play="setPlay(true)"
      @pause="setPlay(false)"
      @timeupdate="setCurrentTime($refs.player.currentTime)"
      @durationchange="setTrackDuration($refs.player.duration)"
      @error="log('error', $event)"
      @load="log('load', $event)"
      @ended="nextTrack"
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

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
      'hasQueue',
      'currentTime',
      'duration',
      'progress',
      'playing',
      'albumArt'
    ])
  },
  mounted () {
    this.setAudioControl(this.$refs.player)
  },
  methods: {
    ...mapMutations('player', [
      'setPlay', 'setCurrentTime', 'setTrackDuration', 'setAudioControl'
    ]),
    ...mapActions('player', [
      'setTrack', 'nextTrack', 'prevTrack'
    ]),
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
