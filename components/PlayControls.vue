<template>
  <!--  <div class="level">-->
  <!--    <b-tooltip-->
  <!--      label="play"-->
  <!--      position="is-left"-->
  <!--      type="is-dark"-->
  <!--      square-->
  <!--    >-->
  <!--      <a-->
  <!--        class="p-1 is-clickable"-->
  <!--        @click="startPlaylist(tracks)"-->
  <!--      >-->
  <!--        <ion-icon name="play" size="large" />-->
  <!--      </a>-->
  <!--    </b-tooltip>-->
  <!--    <b-tooltip-->
  <!--      label="shuffle"-->
  <!--      position="is-left"-->
  <!--      type="is-dark"-->
  <!--      square-->
  <!--    >-->
  <!--      <a-->
  <!--        class="p-1 is-clickable"-->
  <!--        @click="shufflePlaylist(tracks)"-->
  <!--      >-->
  <!--        <ion-icon name="shuffle-outline" size="large" />-->
  <!--      </a>-->
  <!--    </b-tooltip>-->
  <!--    <b-tooltip-->
  <!--      label="append to queue"-->
  <!--      position="is-left"-->
  <!--      type="is-dark"-->
  <!--      square-->
  <!--    >-->
  <!--      <a-->
  <!--        class="p-1 is-clickable"-->
  <!--        @click="appendToPlaylist(tracks)"-->
  <!--      >-->
  <!--        <ion-icon name="add" size="large" />-->
  <!--      </a>-->
  <!--    </b-tooltip>-->
  <!--  </div>-->
  <div class="level-item">
    <div class="field has-addons">
      <p class="control">
        <b-dropdown aria-role="list" append-to-body scrollable max-height="25vh">
          <template #trigger>
            <button class="button is-rounded is-right">
              <ion-icon :size="size" name="play" />
            </button>
          </template>
          <b-dropdown-item custom class="is-size-5 dropdown-header">
            Play Tracks
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('now', false)">
            Now
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('next', false)">
            Next
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('end', false)">
            End
          </b-dropdown-item>
        </b-dropdown>
      </p>
      <p class="control">
        <b-dropdown aria-role="list" append-to-body scrollable max-height="25vh">
          <template #trigger>
            <button class="button is-rounded is-right">
              <ion-icon :size="size" name="shuffle" />
            </button>
          </template>
          <b-dropdown-item custom class="is-size-5 dropdown-header">
            Shuffle & Play
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('now', true)">
            Now
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('next', true)">
            Next
          </b-dropdown-item>
          <b-dropdown-item @click="playTracks('end', true)">
            End
          </b-dropdown-item>
        </b-dropdown>
      </p>
      <p class="control">
        <b-dropdown aria-role="list" append-to-body scrollable max-height="25vh">
          <template #trigger>
            <button class="button is-rounded is-right">
              <ion-icon :size="size" name="add" />
            </button>
          </template>
          <b-dropdown-item custom class="is-size-5 dropdown-header">
            Add to Playlist
          </b-dropdown-item>
          <b-dropdown-item
            v-for="playlist in playlists"
            :key="playlist.id"
            aria-role="listitem"
            @click="addToPlaylist(playlist)"
          >
            {{ playlist.name }}
          </b-dropdown-item>
        </b-dropdown>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PlayControls',
  props: {
    tracks: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      default: 'is-medium'
    }
  },
  computed: {
    ...mapGetters('playlists', ['playlists'])
  },
  methods: {
    ...mapActions('player', [
      'shufflePlaylist', 'startPlaylist', 'appendToPlaylist', 'addToPlaylistNext'
    ]),
    playTracks (when, shuffle) {
      const tracksToAdd = [...this.tracks]
      if (shuffle) {
        tracksToAdd.sort((a, b) => 0.5 - Math.random())
      }
      switch (when) {
        case 'next':
          this.addToPlaylistNext(tracksToAdd)
          break
        case 'end':
          this.appendToPlaylist(tracksToAdd)
          break
        case 'now':
        default:
          this.startPlaylist(tracksToAdd)
          break
      }
    },
    async addToPlaylist (playlist) {
      await this.$api.playlist.addTracks(playlist.id, this.tracks.map(t => t.mediaFileId || t.id))
        .then(() => this.$buefy.toast.open({
          type: 'is-text',
          message: `${this.tracks.length} tracks added to ${playlist.name}`
        })).catch(() => this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Error adding tracks to playlist'
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

.dropdown-content {
  padding-top: 0 !important;
}

.dropdown-header {
  position: sticky;
  top: -8px;
  z-index: 1;
  color: $text-invert;
  background-color: $text;
}
</style>
