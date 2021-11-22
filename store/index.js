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
  queueOpen: false,
  eventStream: null,
  scanStatus: {
    scanning: false,
    count: 0,
    folderCount: 0
  },
  serverStatus: {
    startTime: null,
    version: ''
  }
})

export const mutations = {
  setMenuOpen (state, payload) {
    state.menuOpen = payload
  },
  setQueueOpen (state, payload) {
    state.queueOpen = payload
  },
  setEventStream (state, eventSource) {
    state.eventStream = eventSource
  },
  setScanStatus (state, scanStatus) {
    state.scanStatus = scanStatus
  },
  setServerStatus (state, status) {
    state.serverStatus = {
      version: status.version,
      startTime: new Date(status.startTime)
    }
  }
}

export const actions = {
  toggleMenu ({ commit, state }) {
    commit('setMenuOpen', !state.menuOpen)
  },
  toggleQueue ({ commit, state }) {
    commit('setQueueOpen', !state.queueOpen)
  },
  setRating ({ commit }, { id, rating }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(
        '/rest/setRating', {
          params: { id, rating }
        }
      ).then((res) => {
        if (res['subsonic-response'].status === 'ok') {
          resolve()
        } else {
          reject(new Error(res['subsonic-response'].error))
        }
      }).catch(err => reject(err))
    })
  },
  setFavorite (context, { id, isFavorite }) {
    const path = isFavorite ? '/rest/star' : '/rest/unstar'
    return new Promise((resolve, reject) => {
      this.$axios.$get(path, {
        params: { id }
      }
      ).then((res) => {
        if (res['subsonic-response'].status === 'ok') {
          resolve()
        } else {
          reject(new Error(res['subsonic-response'].error))
        }
      }).catch(err => reject(err))
    })
  },
  startEventStream ({ commit, state, rootState }) {
    if (state.eventStream === null && rootState.user.token !== null) {
      const eventSource = new EventSource(`${state.user.baseUrl}/api/events?jwt=${rootState.user.token}`)
      eventSource.addEventListener('scanStatus', function (e) {
        commit('setScanStatus', JSON.parse(e.data))
      })
      eventSource.addEventListener('serverStart', function (e) {
        commit('setServerStatus', JSON.parse(e.data))
      })

      commit('setEventStream', eventSource)
    }
  },
  closeEventStream ({ commit, state }) {
    state.eventStream.close()
    commit('setEventStream', null)
  }
}
export const getters = {
  menuOpen: state => state.menuOpen,
  queueOpen: state => state.queueOpen,
  serverStatus: state => state.serverStatus,
  scanStatus: state => state.scanStatus
}
