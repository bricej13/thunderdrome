export const state = () => ({
  baseUrl: null,
  id: null,
  isAdmin: false,
  name: null,
  subsonicSalt: null,
  subsonicToken: null,
  token: null,
  username: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  login (state, payload) {
    state.baseUrl = payload.baseUrl
    state.id = payload.id
    state.isAdmin = payload.isAdmin
    state.name = payload.name
    state.subsonicSalt = payload.subsonicSalt
    state.subsonicToken = payload.subsonicToken
    state.token = payload.token
    state.username = payload.username
  },
  logout (state) {
    state.baseUrl = null
    state.id = null
    state.isAdmin = false
    state.name = null
    state.subsonicSalt = null
    state.subsonicToken = null
    state.token = null
    state.username = null
  }
}

export const actions = {
  login ({ commit, dispatch }, { baseUrl, username, password }) {
    baseUrl = baseUrl.endsWith('/') ? baseUrl.substr(0, baseUrl.length - 1) : baseUrl
    return new Promise((resolve, reject) => {
      this.$api.login(username, password, baseUrl)
        .then((res) => {
          this.$axios.setBaseURL(baseUrl)
          commit('login', Object.assign(res, { baseUrl }))
          dispatch('startEventStream', { root: true })
          const plausible = window.plausible
          if (plausible) {
            plausible('Login', { props: { baseUrl } })
          }
          resolve(res)
        }).catch((err) => {
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
  loggedIn: state => state.token !== null,
  username: state => state.username,
  baseUrl: state => state.baseUrl,
  token: state => state.token,
  subsonicSalt: state => state.subsonicSalt,
  subsonicToken: state => state.subsonicToken,
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
