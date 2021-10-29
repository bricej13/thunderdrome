<template>
  <div class="play-queue-wrapper">
    <div />
    <div v-for="(track, j) in playlist" :key="track.mediaFileId + j" class="pb-1 pl-1 play-queue-track is-clickable" :class="{'active': i === j}" @click="setTrack(j)">
      <div class="is-uppercase">
        {{ track.title }}
      </div>
      <div class="has-text-weight-normal">
        {{ track.artist }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PlayQueue',
  computed: {
    ...mapGetters('player', [
      'i',
      'playlist',
      'currentTrack',
      'duration',
      'playing',
      'albumArt'
    ])
  },
  methods: {
    ...mapActions('player', [
      'setTrack'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.play-queue-track {
  &:hover {
    background-color: $menu-item-hover-background-color;
    color: $white;
  }
  &.active {
    color: $white;
    background-color: $primary;
  }
}

.play-queue-wrapper {
  //border-left: 2px solid black;
}
</style>
