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
  }
}

export const actions = {
  loadAlbums ({ state, commit }) {
    if (differenceInMinutes(new Date(), state.albumLoadDate) > 10 || state.albums.length === 0) {
      this.$axios.$get(
        '/api/album?_end=-100&_order=ASC&_sort=name&_start=0'
      ).then(albums => commit('setAlbums', albums))
    }
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
