export const state = () => ({
  scrobbleAt: 0.4,
  cacheSize: 268435456,
  logoSpeed: 'thirty-three',
  showViz: true
})

export const mutations = {
  setScrobbleAt (state, pct) {
    if (pct > 0 && pct <= 100) {
      state.scrobbleAt = pct
    }
  },
  setCacheSize (state, bytes) {
    state.cacheSize = bytes
  },
  setLogoSpeed (state, speed) {
    state.logoSpeed = speed
  },
  setShowViz (state, showViz) {
    state.showViz = showViz
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
  cacheSize: state => state.cacheSize,
  logoSpeed: state => state.logoSpeed,
  showViz: state => state.showViz
}
