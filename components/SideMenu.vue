<template>
  <aside class="block">
    <b-menu>
      <b-menu-list>
        <b-menu-item
          label="Albums"
          icon="albums-outline"
          tag="nuxt-link"
          active-class="is-active"
          :to="{name: 'albums'}"
          expanded
        >
          <b-menu-item
            label="Random"
            icon="shuffle"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: { _sort: 'random'}}"
          />
          <b-menu-item
            label="Favorites"
            icon="heart-outline"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: {_sort:'starred_at', _order:'DESC', starred: true}}"
          />
          <b-menu-item
            label="Top Rated"
            icon="star-outline"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: {_sort:'rating', _order: 'DESC', has_rating:true}}"
          />
          <b-menu-item
            label="Recently Added"
            icon="timer-outline"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: {_sort:'recently_added', _order: 'DESC'}}"
          />
          <b-menu-item
            label="Recently Played"
            icon="play-circle-outline"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: {_sort:'play_date', _order: 'DESC'}}"
          />
          <b-menu-item
            label="Most Played"
            icon="infinite"
            tag="nuxt-link"
            exact-active-class="is-active"
            :to="{name: 'albums', query: {_sort:'play_count', _order: 'DESC'}}"
          />
        </b-menu-item>
        <b-menu-item
          label="Artists"
          icon="mic-outline"
          tag="nuxt-link"
          active-class="is-active"
          :to="{name: 'artists', query: { _start: 0, _end: 20, _order: 'ASC', _sort: 'name' }}"
        />
        <b-menu-item
          label="Songs"
          icon="musical-note-outline"
          tag="nuxt-link"
          exact-active-class="is-active"
          :to="{name: 'songs', query: { _start: 0, _end: 20, _order: 'ASC', _sort: 'title' }}"
        />

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
// import { Container } from 'vue-smooth-dnd'

export default {
  name: 'SideMenu',
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
      background-color: $ui3-yellow;
    }
  }
  &:nth-child(5n+2) {
    .is-active, &>a:hover {
      background-color: $ui3-orange;
    }
  }
  &:nth-child(5n+3) {
    .is-active, &>a:hover {
      background-color: $ui3-red;
    }
  }
  &:nth-child(5n+4) {
    .is-active, &>a:hover  {
      background-color: $ui3-beet;
    }
  }
  &:nth-child(5n+5) {
    .is-active, &>a:hover  {
      background-color: $ui3-fuchsia;
    }
  }
  &:hover {
  }
}

</style>
