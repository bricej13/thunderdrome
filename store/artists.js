import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  artists: [],
  loading: false,
  artistLoadDate: new Date(0)
})

export const mutations = {
  setArtists (state, payload) {
    state.artists = payload
    state.artistLoadDate = new Date()
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  loadArtists ({ state, commit }) {
    if (differenceInMinutes(new Date(), state.artistLoadDate) > 10 || state.artists.length === 0) {
      commit('setLoading', true)
      this.$axios.$get(
        'api/artist', {
          params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'name' }
        }
      ).then(artists => commit('setArtists', artists))
        .finally(() => commit('setLoading', false))
    }
  },
  artistSearch (ctx, name) {
    return this.$axios.$get(
      '/api/artist', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
      }
    )
  },
  get (ctx, artistId) {
    return this.$axios.$get(
      `api/artist/${artistId}`
    )
  },
  getAlbums (ctx, artistId) {
    return this.$axios.$get(
      '/api/album', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'maxYear', artist_id: artistId }
      })
  },
  getTracks (ctx, artistId) {
    return this.$axios.$get(
      '/api/song', {
        params: { _start: 0, _end: 0, _order: 'ASC', artist_id: artistId }
      }
    )
  },
  loadExternalBio (ctx, artistId) {
    return this.$axios.$get('/rest/getArtistInfo', {
      params: {
        id: artistId
      }
    })
  }
}

export const getters = {
  artists: (state) => {
    return state.artists
  },
  loading: (state) => {
    return state.loading
  },
  total: (state) => {
    return state.artists.length
  },
  getArtists: state => (id) => {
    return state.artists.find(p => p.id === id)
  }
}
