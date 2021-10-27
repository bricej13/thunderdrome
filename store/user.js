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
  setBaseUrl (state, payload) {
    state.baseUrl = payload
  },
  setId (state, payload) {
    state.id = payload
  },
  setName (state, payload) {
    state.name = payload
  },
  setIsAdmin (state, payload) {
    state.isAdmin = payload
  },
  setToken (state, payload) {
    state.token = payload
  },
  setSubsonicToken (state, payload) {
    state.subsonicToken = payload
  },
  setSubsonicSalt (state, payload) {
    state.subsonicSalt = payload
  }
}

export const actions = {
  login ({ commit, dispatch }, { baseUrl, username, password }) {
    return this.$axios.$post(baseUrl + '/auth/login', { username, password })
      .then((res) => {
        this.$axios.setBaseURL(baseUrl)
        commit('setBaseUrl', baseUrl)
        commit('setId', res.id)
        commit('setName', res.username)
        commit('setToken', res.token)
        commit('setIsAdmin', res.isAdmin)
        commit('setSubsonicToken', res.subsonicToken)
        commit('setSubsonicSalt', res.subsonicSalt)
      }).catch(() => dispatch('logout'))
  },
  logout (context) {
    context.commit('baseUrl', null)
    context.commit('setId', null)
    context.commit('setUser', null)
    context.commit('setToken', null)
    context.commit('setIsAdmin', false)
    context.commit('setSubsonicToken', null)
    context.commit('setIsAdmin', null)
    context.commit('setName', null)
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
      '&c=ui3'
  }
}
