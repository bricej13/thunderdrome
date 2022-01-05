<template>
  <div class="play-queue-wrapper">
    <div class="play-queue-header px-1 pb-2">
      <div class="is-flex is-justify-content-space-between is-align-items-baseline ">
        <div class="title is-3">
          Queue
        </div>
        <div>
          <a @click="shuffleQueue"><ion-icon name="shuffle-outline" /></a>
          <a @click="clearQueue"><ion-icon name="trash-outline" /></a>
        </div>
      </div>
      <div class="is-flex is-justify-content-space-between is-align-items-baseline ">
        <div class="is-6">
          {{ i + 1 }} / {{ playlist.length }}
        </div>
        <div class="is-6">
          {{ playlist.reduce((acc, cur) => acc + cur.duration, 0) | playlisttime }}
        </div>
      </div>
    </div>

    <Container
      group-name="track-target"
      behaviour="move"
      drag-class="has-background-link-light has-text-white pb-1 pl-1"
      :get-child-payload="(i) => playlist[i]"
      @drop="onDrop"
    >
      <Draggable
        v-for="(track, j) in playlist"
        :key="`${track.mediaFileId || track.id}${j}`"
        class="pb-1 pl-1 play-queue-track is-unselectable"
        :class="{'active': i === j}"
      >
        <div class="draggable-item">
          <div
            class="is-flex is-justify-content-space-between is-align-items-center"
            @click="setTrack(j)"
          >
            <div>
              <div class="is-uppercase has-text-weight-semibold">
                {{ track.title }}
              </div>
              <div class="has-text-weight-normal">
                {{ track.artist }}
              </div>
            </div>
            <div class="p-2" />
            <div v-if="i !== j" class="px-2">
              <a @click.stop="removeFromPlaylist(j)">
                <ion-icon name="trash" />
              </a>
              <a @click.stop="setTrack(j)">
                <ion-icon name="play" />
              </a>
            </div>
          </div>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'PlayQueue',
  // eslint-disable-next-line vue/no-unused-components
  components: { Container, Draggable },
  data () {
    return {
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
      'shuffleQueue',
      'removeFromPlaylist',
      'dragonDrop'
    ]),
    onDrop (dropResult) {
      if (dropResult.addedIndex !== dropResult.removedIndex && dropResult.addedIndex != null) {
        this.dragonDrop(dropResult)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";

.play-queue-wrapper {
  position: relative;
  .play-queue-header {
    position: sticky;
    background-color: colors.$background;
    top: 0;
    z-index: 1;
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
      background-color: colors.$color4;
      color: colors.$text-invert;
      a {
        color: colors.$text-invert;
        &:hover {
          color: colors.$text;
        }
      }
    }
    &.active {
      color: colors.$text-invert;
      background-color: colors.$primary;
      a {
        color: colors.$text-invert;
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

//.play-queue-track {
//  //transition: all .3s;
//}
//.queue-enter, .queue-leave-to {
//  opacity: 0;
//  transform: translateX(30px);
//}
//.queue-leave-active {
//  position: absolute;
//}

</style>
