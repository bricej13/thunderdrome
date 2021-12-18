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
  },
  menu: {
    showPlaylistCount: 25,
    items: [
      {
        label: 'Albums',
        icon: 'albums-outline',
        to: { name: 'albums' },
        children: [
          {
            label: 'Random',
            icon: 'shuffle',
            to: { name: 'albums', query: { _sort: 'random' } }
          },
          {
            label: 'Favorites',
            icon: 'heart-outline',
            to: { name: 'albums', query: { _sort: 'starred_at', _order: 'DESC', starred: true } }
          },
          {
            label: 'Top Rated',
            icon: 'star-outline',
            to: { name: 'albums', query: { _sort: 'rating', _order: 'DESC', has_rating: true } }
          },
          {
            label: 'Recently Added',
            icon: 'timer-outline',
            to: { name: 'albums', query: { _sort: 'recently_added', _order: 'DESC' } }
          },
          {
            label: 'Recently Played',
            icon: 'play-circle-outline',
            to: { name: 'albums', query: { _sort: 'play_date', _order: 'DESC' } }
          },
          {
            label: 'Most Played',
            icon: 'infinite',
            to: { name: 'albums', query: { _sort: 'play_count', _order: 'DESC' } }
          }
        ]
      },
      {
        label: 'Artists',
        icon: 'mic-outline',
        to: { name: 'artists', query: { _start: 0, _end: 20, _order: 'DESC', _sort: 'playCount' } },
        children: []
      },
      {
        label: 'Tracks',
        icon: 'musical-note-outline',
        to: { name: 'songs', query: { _start: 0, _end: 20, _order: 'ASC', _sort: 'title' } },
        children: []
      }
    ]
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
  scanStatus: state => state.scanStatus,
  menu: state => state.menu
}
