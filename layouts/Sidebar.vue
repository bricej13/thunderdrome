<template>
  <aside class="block">
    <!--    <NuxtLink :to="{name: 'albums'}" exact-active-class="is-active" class="p-4 menu-item ">-->
    <!--      <div class="level">-->
    <!--        <div class="level-left">-->
    <!--          <b-icon icon="adjust" />-->
    <!--          Albums-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </NuxtLink>-->
    <!--    <NuxtLink :to="{name: 'artists'}" exact-active-class="is-active" class="p-4 menu-item ">-->
    <!--      <div class="level">-->
    <!--        <div class="level-left">-->
    <!--          <b-icon icon="microphone-outline" />-->
    <!--          Artists-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </NuxtLink>-->
    <!--    <NuxtLink :to="{name: 'songs'}" exact-active-class="is-active" class="p-4 menu-item ">-->
    <!--      <div class="level">-->
    <!--        <div class="level-left">-->
    <!--          <b-icon icon="music-note" />-->
    <!--          Songs-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </NuxtLink>-->
    <!--    <NuxtLink :to="{name: 'playlists'}" exact-active-class="is-active" class="p-4 menu-item ">-->
    <!--      <div class="level">-->
    <!--        <div class="level-left">-->
    <!--          <b-icon icon="playlist-music" />-->
    <!--          Playlists-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <Container-->
    <!--        v-for="playlist of playlistLinks"-->
    <!--        :key="playlist.id"-->
    <!--        behaviour="drop-zone"-->
    <!--        group-name="track-target"-->
    <!--        drag-class="has-background-info"-->
    <!--        @drop="onDrop(playlist.id, $event)"-->
    <!--      >-->
    <!--        <NuxtLink-->
    <!--          :to="playlist.to"-->
    <!--          exact-active-class="is-active"-->
    <!--          class="py-2 pl-5 menu-item"-->
    <!--        >-->
    <!--          <div class="level">-->
    <!--            <div class="level-left">-->
    <!--              <b-icon v-if="playlist.icon" :icon="playlist.icon" />-->
    <!--              {{ playlist.title }}-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </NuxtLink>-->
    <!--      </Container>-->
    <!--    </NuxtLink>-->
    <b-menu>
      <b-menu-list>
        <b-menu-item icon="record-vinyl" tag="nuxt-link" exact-active-class="is-active" :to="{name: 'albums'}" label="Albums" />
        <b-menu-item icon="microphone-alt" tag="nuxt-link" exact-active-class="is-active" :to="{name: 'artists'}" label="Artists" />
        <b-menu-item icon="music" tag="nuxt-link" exact-active-class="is-active" :to="{name: 'songs'}" label="Songs" />

        <b-menu-item
          icon="stream"
          tag="nuxt-link"
          exact-active-class="is-active"
          :to="{name: 'playlists'}"
          expanded
        >
          <template #label>
            Playlists
          </template>

          <b-menu-item
            v-for="playlist of playlistLinks"
            :key="playlist.id"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="playlist.to"
          >
            <template #label>
              <div class="is-flex is-flex-direction-row is-justify-content-space-between">
                <div>
                  {{ playlist.title }}
                </div>
                <div
                  @click.stop.prevent="playPlaylist(playlist.id)"
                >
                  <b-icon
                    icon="play"
                    size="is-small"
                  />
                </div>
              </div>
            </template>
          </b-menu-item>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
// import { Container } from 'vue-smooth-dnd'

export default {
  name: 'Sidebar',
  // components: { Container },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('playlists', [
      'playlists',
      'playlistLinks',
      'getPlaylistTracks'
    ])
  },
  mounted () {
    this.$store.dispatch('playlists/loadPlaylists')
  },
  methods: {
    ...mapActions('playlists', ['addTracksToPlaylist', 'loadPlaylistTracks']),
    playPlaylist (id) {
      this.loadPlaylistTracks(id).then(() => this.$store.dispatch('player/startPlaylist', this.getPlaylistTracks(id)))
    },
    onDrop (playlistId, dropResult) {
      if (dropResult.addedIndex != null) {
        this.addTracksToPlaylist({ playlistId, tracks: [dropResult.payload.mediaFileId || dropResult.payload.id] })
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/colors.scss";

.menu-list a {
  border-radius: 0;
  &:hover {
    color: white;
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
