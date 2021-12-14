export const state = () => ({
  scrobbleAt: 0.1,
  cacheSize: 268435456
})

export const mutations = {
  setScrobbleAt (state, pct) {
    if (pct > 0 && pct <= 100) {
      state.scrobbleAt = pct
    }
  },
  setCacheSize (state, bytes) {
    state.cacheSize = bytes
  }
}

export const actions = {
  setScrobbleAt ({ commit }, pct) {
    commit('setScrobbleAt', pct)
  },
  setCacheSize ({ commit }, bytes) {
    navigator.storage.estimate().then((r) => {
      if (r.quota >= bytes) {
        commit('setCacheSize', bytes)
      }
    })
  }
}

export const getters = {
  scrobbleAt: state => state.scrobbleAt,
  cacheSize: state => state.cacheSize
}
