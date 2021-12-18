<template>
  <aside class="block">
    <b-menu>
      <b-menu-list>
        <b-menu-item
          v-for="item in menu.items"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          tag="nuxt-link"
          active-class="is-active"
          :to="item.to"
          expanded
        >
          <b-menu-item
            v-for="child in item.children"
            :key="child.label"
            :label="child.label"
            :icon="child.icon"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="child.to"
            expanded
          />
        </b-menu-item>
        <b-menu-item
          icon="reorder-four"
          tag="nuxt-link"
          exact-active-class="is-active"
          :to="{name: 'playlists'}"
          expanded
        >
          <template #label>
            Playlists
          </template>

          <b-menu-item
            v-for="playlist of playlistLinks.slice(0, menu.showPlaylistCount)"
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
                  class="ml-2"
                  @click.stop.prevent="playPlaylist(playlist.id)"
                >
                  <ion-icon name="play" />
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

export default {
  name: 'SideMenu',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['menu']),
    ...mapGetters('playlists', [
      'playlists',
      'playlistLinks',
      'getPlaylistTracks'
    ])
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

aside .menu > .menu-list li ul {
  margin: .5em 0 .5em .75em;
}

aside .menu > .menu-list a {
  border-radius: 0;
  &:hover {
    color: white;
  }
}

aside .menu > .menu-list li {
  &:nth-child(5n+1) {
    .is-active, &>a:hover {
      background-color: $color1;
    }
  }
  &:nth-child(5n+2) {
    .is-active, &>a:hover {
      background-color: $color2;
    }
  }
  &:nth-child(5n+3) {
    .is-active, &>a:hover {
      background-color: $color3;
    }
  }
  &:nth-child(5n+4) {
    .is-active, &>a:hover  {
      background-color: $color4;
    }
  }
  &:nth-child(5n+5) {
    .is-active, &>a:hover  {
      background-color: $color5;
    }
  }
  &:hover {
  }
}

</style>
