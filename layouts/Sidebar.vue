<template>
  <aside class="block">
    <NuxtLink :to="{name: 'albums'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="adjust" />
          Albums
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'artists'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="microphone-outline" />
          Artists
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'songs'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="music-note" />
          Songs
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'playlists'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="playlist-music" />
          Playlists
        </div>
      </div>
      <Container
        v-for="playlist of playlistLinks"
        :key="playlist.id"
        behaviour="drop-zone"
        group-name="track-target"
        drag-class="has-background-info"
        @drop="onDrop(playlist.id, $event)"
      >
        <NuxtLink
          :to="playlist.to"
          exact-active-class="is-active"
          class="py-2 pl-5 menu-item"
        >
          <div class="level">
            <div class="level-left">
              <b-icon v-if="playlist.icon" :icon="playlist.icon" />
              {{ playlist.title }}
            </div>
          </div>
        </NuxtLink>
      </Container>
    </NuxtLink>
  </aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { Container } from 'vue-smooth-dnd'

export default {
  name: 'Sidebar',
  components: { Container },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('playlists', [
      'playlists',
      'playlistLinks'
    ])
  },
  mounted () {
    this.$store.dispatch('playlists/loadPlaylists')
  },
  methods: {
    ...mapActions('playlists', ['addTracksToPlaylist']),
    onDrop (playlistId, dropResult) {
      if (dropResult.addedIndex != null) {
        this.addTracksToPlaylist({ playlistId, tracks: [dropResult.payload.mediaFileId || dropResult.payload.id] })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.menu-item {
    color: $black !important;
    display: block;

    &:hover {
      color: white !important;
    }

    &.is-active {
      text-decoration: underline;
    }

}

aside > a.menu-item {
  &:nth-child(1) {
    background-color: $ui3-yellow;
  }
  &:nth-child(2) {
    background-color: $ui3-orange;
  }
  &:nth-child(3) {
    background-color: $ui3-red;
  }
  &:nth-child(4) {
    background-color: $ui3-beet;
  }
  &:nth-child(5) {
    background-color: $ui3-fuchsia;
  }
  &:hover {
  }
}

</style>
