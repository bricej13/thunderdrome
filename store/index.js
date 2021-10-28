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
export const state = () => ({
  playlists: []
})

export const mutations = {
  // RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  setPlaylists (state, payload) {
    state.playlists = payload
  }
}

export const actions = {
  loadPlaylists (context) {
    return this.$axios.$get('api/playlist?_end=0&_sort=name&_start=-100').then(res =>
      context.commit('setPlaylists', res)
    )
  }
}
export const getters = {
  getPlaylist: state => (id) => {
    return state.playlists.find(p => p.id === id)
  }
}
