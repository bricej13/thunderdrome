<template>
  <div class="play-queue-wrapper">
    <div class="play-queue-header px-1 pb-2">
      <div class="is-flex is-justify-content-space-between is-align-items-baseline ">
        <div class="title is-3">
          Queue
        </div>
        <a @click="clearQueue"><b-icon icon="delete" class="is-clickable px-4" /></a>
      </div>
      <div class="is-flex is-justify-content-space-between is-align-items-baseline ">
        <div class="is-6">
          {{ $store.getters["player/i"] + 1 }} / {{ $store.getters["player/playlist"].length }}
        </div>
        <div class="is-6">
          {{ $store.getters['player/playlist'].reduce((acc, cur) => acc + cur.duration, 0) | playlisttime }}
        </div>
      </div>
    </div>

    <transition-group name="queue">
      <div
        v-for="(track, j) in playlist"
        :key="track.key || ((track.mediaFileId || track.id) + j)"
        class="pb-1 pl-1 play-queue-track is-clickable"
        :class="{'active': i === j}"
        @click="setTrack(j)"
      >
        <div class="is-flex is-justify-content-space-between is-align-items-center">
          <div>
            <div class="is-uppercase">
              {{ track.title }}
            </div>
            <div class="has-text-weight-normal">
              {{ track.artist }}
            </div>
          </div>
          <div>
            <a v-if="i !== j" @click.stop="removeFromPlaylist(j)"><b-icon icon="delete" class="is-clickable px-4" /></a>
            <b-icon v-else icon="play" class="px-4" />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PlayQueue',
  data () {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    }
  },
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
      'setTrack',
      'clearQueue',
      'removeFromPlaylist'
    ]),
    onDrop (dropResult) {
      // this.items = applyDrag(this.items, dropResult)
      console.log(dropResult)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.play-queue-wrapper {
  position: relative;
  .play-queue-header {
    position: sticky;
    background-color: $background;
    top: 0;
    .title {
      margin-bottom: .5rem;
    }
  }
  .play-queue-track {
    &:first-child {
    }
    a {
      color: transparent;
    }
    &:hover {
      background-color: $menu-item-hover-background-color;
      color: $white;
      a {
        color: $white;
        &:hover {
          color: $black;
        }
      }
    }
    &.active {
      color: $white;
      background-color: $primary;
      a {
        color: $white;
      }
    }
  }
}

//.queue-enter-active, .queue-leave-active {
//  transition: all .2s;
//}
//.queue-enter, .queue-leave-to /* .queue-leave-active below version 2.1.8 */ {
//  opacity: 0;
//  transform: translateX(30px);
//}

.play-queue-track {
  transition: all .3s;
}
.queue-enter, .queue-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.queue-leave-active {
  position: absolute;
}

</style>
