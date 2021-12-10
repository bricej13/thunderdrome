export const state = () => ({
  scrobbleAt: 0.1,
  cacheSize: 64000000
})

export const mutations = {
  setScrobbleAt (state, pct) {
    if (pct > 0 && pct <= 100) {
      state.scrobbleAt = pct
    }
  }
}

export const actions = {
  setScrobbleAt ({ commit }, pct) {
    commit('setScrobbleAt', pct)
  }
}

export const getters = {
  scrobbleAt: state => state.scrobbleAt,
  cacheSize: state => state.cacheSize
}
