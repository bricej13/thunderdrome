export const state = () => ({
  activeServer: 0,
  serverAuths: []
})

export const mutations = {
  setToken (state, token) {
    state.serverAuths[state.activeServer].token = token
  },
  login (state, payload) {
    state.serverAuths.push({ ...payload })
  },
  logout (state, i) {
    state.serverAuths.splice(i, 1)
    state.activeServer = state.serverAuths.length > 0
      ? state.activeServer - 1
      : 0
  }
}

export const actions = {
  login ({ commit, dispatch }, { baseUrl, username, password }) {
    return new Promise((resolve, reject) => {
      this.$api.login(username, password, baseUrl)
        .then((res) => {
          this.$axios.setBaseURL(baseUrl)
          commit('login', Object.assign(res, { baseUrl }))
          dispatch('startEventStream', { root: true })
          resolve(res)
        }).catch((err) => {
          dispatch('closeEventStream', { root: true })
          reject(err)
        })
    })
  },
  async logout ({ dispatch, commit }) {
    await dispatch('closeEventStream', { root: true })
    commit('logout', 0)
  }
}
export const getters = {
  loggedIn: state => state.serverAuths.length > 0,
  auth: state => state.serverAuths[state.activeServer],
  username: state => state.serverAuths[state.activeServer].username,
  baseUrl: state => state.serverAuths[state.activeServer].baseUrl,
  token: state => state.serverAuths[state.activeServer].token,
  subsonicSalt: state => state.serverAuths[state.activeServer].subsonicSalt,
  subsonicToken: state => state.serverAuths[state.activeServer].subsonicToken,
  subsonicUrl: (state, getters) => (path) => {
    return getters.baseUrl + '/rest/' + path +
      `?u=${getters.username}` +
      `&t=${getters.subsonicToken}` +
      `&s=${getters.subsonicSalt}` +
      '&f=json' +
      '&v=1.8.0' +
      '&c=thunderdrome'
  }
}
