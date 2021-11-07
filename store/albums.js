// import VuexPersistence from 'vuex-persist'
//
// const vuexLocal = new VuexPersistence({
//   key: 'thunderdrome',
//   storage: window.localStorage,
//   modules: ['user'],
//   filter: mutation => mutation.type === 'login' || mutation.type === 'logout'
// })
//
// export const plugins = [vuexLocal.plugin]
import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  albums: [],
  albumLoadDate: new Date(0)
})

export const mutations = {
  setAlbums (state, payload) {
    console.log('setting albums')
    state.albums = payload
    state.albumLoadDate = new Date()
  },
  setRating (state, { id, rating }) {
    const i = state.albums.findIndex(a => a.id === id)
    if (i >= 0) {
      state.albums.splice(i, 1, Object.assign({}, state.albums[i], { rating }))
    }
  }
}

export const actions = {
  loadAlbums ({ state, commit }) {
    if (differenceInMinutes(new Date(), state.albumLoadDate) > 10 || state.albums.length === 0) {
      this.$axios.$get(
        '/api/album?_end=-100&_order=ASC&_sort=name&_start=0'
      ).then(albums => commit('setAlbums', albums))
    }
  },
  setRating ({ commit }, { id, rating }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(
        '/rest/setRating', {
          params: { id, rating }
        }
      ).then((res) => {
        if (res['subsonic-response'].status === 'ok') {
          commit('setRating', { id, rating })
          resolve()
        } else {
          reject(new Error(res['subsonic-response'].error))
        }
      }).catch(err => reject(err))
    })
  }
}
export const getters = {
  albums: (state) => {
    return state.albums
  },
  getAlbum: state => (id) => {
    return state.albums.find(p => p.id === id)
  }
}
