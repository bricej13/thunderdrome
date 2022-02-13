<template>
  <div class="audio-player" :style="{'height': hasQueue ? 'auto' : 0}">
    <div>
      <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
        <div class="pl-4 p-2">
          <NuxtLink v-if="currentTrack" :to="{name: 'albums-id', params: {id: currentTrack.albumId}}">
            <figure class="image is-64x64">
              <img width="64px" height="64px" :src="albumArt" :alt="`${currentTrack.artist} - ${currentTrack.title}`">
            </figure>
          </NuxtLink>
        </div>
        <div class="px-2" style="max-width: 200px;">
          <div v-if="currentTrack">
            <div class="is-size-6 is-uppercase has-text-weight-bold" style="line-height: 1.5rem">
              {{ currentTrack.title }}
            </div>
            <div class="is-size-7">
              <NuxtLink v-if="currentTrack.artistId !== ''" :to="{name: 'artists-id', params: {id: currentTrack.artistId}}">
                {{ currentTrack.artist }}
              </NuxtLink>
              <span v-else>{{ currentTrack.artist }}</span>
            </div>
          </div>
        </div>

        <div class="is-flex-grow-1 px-2 is-invisible-mobile">
          <!--          <wavesurfer @loading="loading = $event" />-->
          <!--          <wavesurfer-preload />-->
          <custom-player @timeupdate="currentTime = $event" />
        </div>

        <div class="px-2 has-text-grey is-flex is-flex-direction-column is-align-items-center is-hidden-mobile" style="min-width: 50px">
          <div>
            {{ currentTime | tracktime }}
          </div>
          <div>
            {{ duration | tracktime }}
          </div>
        </div>

        <div class="pl-2 pr-2">
          <div class="is-flex is-flex-direction-row is-align-items-center">
            <div v-shortkey="['arrowleft']" class="p-1 is-clickable" :disabled="!hasPrev" @shortkey="prevTrack" @click="prevTrack">
              <ion-icon name="play-skip-back-outline" />
            </div>

            <div
              v-shortkey="['space']"
              class="p-1 is-clickable"
              @shortkey="togglePlay"
              @click="togglePlay"
            >
              <ion-icon :name="playing ? 'pause' : 'play'" size="large" />
            </div>
            <!--            <div v-if="loading" class="p-1">-->
            <!--              <ion-icon name="aperture-outline" size="large" />-->
            <!--            </div>-->
            <div v-shortkey="['arrowright']" class="p-1 is-clickable" :disabled="!hasNext" @shortkey="playNextTrack" @click="playNextTrack">
              <ion-icon name="play-skip-forward-outline" />
            </div>
            <div class="p-1 is-clickable is-hidden-desktop" @click="$store.dispatch('toggleQueue')">
              <ion-icon name="menu-outline" size="large" />
            </div>
          </div>
        </div>

        <div v-shortkey="{up: ['arrowup'], down: ['arrowdown']}" class="is-align-self-stretch p-2 pr-4 is-hidden-touch" @shortkey="changeVolume">
          <vertical-progress-bar :value="volume" @change=" $store.dispatch('player/volumeTo', $event)" />
        </div>
      </div>
      <progress-bar class="is-hidden-tablet" :height="10" :value="$store.getters['player/progress']" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import CustomPlayer from '~/components/CustomPlayer'

export default {
  name: 'AudioPlayer',
  components: { CustomPlayer },
  data () {
    return {
      listeners: [],
      loading: false
    }
  },
  computed: {
    ...mapGetters('player', [
      'i',
      'currentTrack',
      'currentStream',
      'currentTime',
      'streamList',
      'hasNext',
      'hasPrev',
      'hasQueue',
      // 'currentTime',
      'duration',
      'progress',
      'playing',
      'albumArt',
      'volume'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations('player', [
      'setPlay', 'setCurrentTime', 'setTrackDuration', 'setVolume', 'setPlay'
    ]),
    ...mapActions('player', [
      'setTrack', 'playNextTrack', 'prevTrack', 'volumeUp', 'volumeDown'
    ]),
    togglePlay () {
      this.setPlay(!this.playing)
    },
    log (type, event) {
      // console.log(type, event)
    },
    changeVolume (event) {
      switch (event.srcKey) {
        case 'up':
          this.volumeUp()
          break
        case 'down':
          this.volumeDown()
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";
.audio-player {
  background-color: colors.$background;
  border-top: 2px solid colors.$text;
  width: 100%;
}

</style>
