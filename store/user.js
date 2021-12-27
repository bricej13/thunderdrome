export const state = () => ({
  baseUrl: null,
  token: null,
  id: null,
  name: null,
  isAdmin: false,
  subsonicSalt: null,
  subsonicToken: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  login (state, payload) {
    state.baseUrl = payload.baseUrl
    state.id = payload.id
    state.name = payload.username
    state.token = payload.token
    state.isAdmin = payload.isAdmin
    state.subsonicToken = payload.subsonicToken
    state.subsonicSalt = payload.subsonicSalt
  },
  logout (state) {
    state.baseUrl = null
    state.id = null
    state.name = null
    state.token = null
    state.isAdmin = false
    state.subsonicToken = null
    state.subsonicSalt = null
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
          dispatch('logout')
          dispatch('closeEventStream', { root: true })
          reject(err)
        })
    })
  },
  async logout ({ dispatch, commit }) {
    await dispatch('closeEventStream', { root: true })
    commit('logout')
  }
}
export const getters = {
  loggedIn: (state) => {
    return state.token != null
  },
  subsonicUrl: state => (path) => {
    return state.baseUrl + '/rest/' + path +
      `?u=${state.name}` +
      `&t=${state.subsonicToken}` +
      `&s=${state.subsonicSalt}` +
      '&f=json' +
      '&v=1.8.0' +
      '&c=thunderdrome'
  }
}
