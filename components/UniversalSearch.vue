<template>
  <div
    v-shortkey="['/']"
    class="universal-search"
    @shortkey="$refs.universalSearch.focus()"
  >
    <b-autocomplete
      ref="universalSearch"
      :data="data"
      group-field="type"
      group-options="items"
      placeholder="/ to search"
      keep-first
      open-on-focus
      expanded
      max-height="50vh"
      @typing="getAsyncData"
      @select="onSelect"
    >
      <template #header>
        <span class="is-muted"><b>shift + enter</b> to play now</span>
      </template>
      <template #empty>
        No results
      </template>

      <template slot-scope="props">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img width="48" height="48" :src="props.option.image">
            </figure>
          </div>
          <div class="media-content">
            <div class="is-size-6 has-text-weight-semibold">
              {{ props.option.title }}
            </div>
            <div v-if="props.option.subtitle" class="is-size-7">
              {{ props.option.subtitle }}
            </div>
          </div>
        </div>
      </template>
    </b-autocomplete>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UniversalSearch',
  data () {
    return {
      data: [],
      isFetching: false
    }
  },
  methods: {
    ...mapActions('albums', ['albumSearch', 'getTracks']),
    ...mapActions('artists', ['artistSearch']),
    ...mapActions('tracks', ['trackSearch']),
    ...mapActions('player', [
      'appendToPlaylist',
      'startPlaylist',
      'shufflePlaylist'
    ]),
    async getAsyncData (v) {
      if (v.length === 0) {
        this.data = []
        return
      }
      this.isFetching = true
      const [tracks, artists, albums] = await Promise.all([
        this.trackSearch(v),
        this.artistSearch(v),
        this.albumSearch(v)
      ])
      const results = []
      if (artists.length > 0) {
        results.push(
          {
            type: 'Artists',
            items: artists.map((a) => {
              return {
                type: 'artist',
                title: a.name,
                image: a.smallImageUrl || a.mediumImageUrl || a.largeImageUrl,
                onNav: () => this.$router.push({ name: 'artists-id', params: { id: a.id } }),
                onPlay: () => this.$store.dispatch('artists/getTracks', a.id).then(tracks => this.shufflePlaylist(tracks))
              }
            })
          }
        )
      }
      if (albums.length > 0) {
        results.push(
          {
            type: 'Albums',
            items: albums.map((a) => {
              return {
                type: 'album',
                title: a.name,
                subtitle: a.artist,
                image: `${this.$store.getters['user/subsonicUrl']('getCoverArt')}&id=${a.id}&size=300}`,
                onNav: () => this.$router.push({ name: 'albums-id', params: { id: a.id } }),
                onPlay: () => this.getTracks(a.id).then(tracks => this.startPlaylist(tracks))
              }
            })
          }
        )
      }
      if (tracks.length > 0) {
        results.push({
          type: 'Tracks',
          items: tracks.map((t) => {
            return {
              type: 'track',
              title: t.title,
              subtitle: t.artist,
              image: `${this.$store.getters['user/subsonicUrl']('getCoverArt')}&id=${t.albumId}&size=300}`,
              onNav: () => this.$router.push({ name: 'albums-id', params: { id: t.albumId } }),
              onPlay: () => this.startPlaylist([t])
            }
          })
        })
      }
      this.data = results
      this.isFetching = false
    },
    onSelect (item, event) {
      if (event.shiftKey) {
        if (item.onPlay) {
          item.onPlay()
        }
      } else {
        item.onNav()
      }
      document.activeElement.blur()
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
.navbar-item .universal-search {
  width: 100%;
  &:focus-within {
  }
  img {
    max-height: none;
  }
  input {
    transition: background-color 200ms, border 200ms;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    border-radius: 0;
    &:focus {
      background-color: $white;
      border: 1px solid black;
    }
  }
}

</style>
