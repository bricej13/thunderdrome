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
  menuOpen: false,
  queueOpen: false
})

export const mutations = {
  setMenuOpen (state, payload) {
    state.menuOpen = payload
  },
  setQueueOpen (state, payload) {
    state.queueOpen = payload
  }
}

export const actions = {
  toggleMenu ({ commit, state }) {
    commit('setMenuOpen', !state.menuOpen)
  },
  toggleQueue ({ commit, state }) {
    commit('setQueueOpen', !state.queueOpen)
  }
}
export const getters = {
  menuOpen: state => state.menuOpen,
  queueOpen: state => state.queueOpen
}
