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
            <div v-if="props.option.subtitle" class="subtitle is-size-7">
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
    ...mapActions('albums', ['albumSearch']),
    ...mapActions('artists', ['artistSearch']),
    ...mapActions('tracks', ['trackSearch']),
    ...mapActions('player', [
      'appendToPlaylist',
      'startPlaylist'
    ]),
    async getAsyncData (v) {
      if (v.length === 0) {
        return
      }
      this.isFetching = true
      const [tracks, artists, albums] = await Promise.all([
        this.trackSearch(v),
        this.artistSearch(v),
        this.albumSearch(v)
      ])
      const $router = this.$router
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
                onNav () {
                  $router.push({ name: 'artists-id', params: { id: a.id } })
                }
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
                onNav () { $router.push({ name: 'albums-id', params: { id: a.id } }) }
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
              image: '',
              onPlay () { this.startPlaylist([t]) }
            }
          })
        })
      }
      this.data = results
      this.isFetching = false
    },
    onSelect (item, event) {
      if (event.shiftKey) {
        console.log('lets play!')
      } else {
        item.onNav()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-item .universal-search {
  &:focus-within {
    width: 100%;
  }
  img {
  max-height: none;
  }
}

</style>
