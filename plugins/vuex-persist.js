import { VuexPersistence } from 'vuex-persist'

export default function ({ store, $axios }) {
  const userStorage = new VuexPersistence({
    key: 'user',
    storage: window.localStorage,
    modules: ['user'],
    restoreState: (key, storage) => {
      const state = JSON.parse(localStorage.getItem(key))
      if (state?.user) {
        $axios.setBaseURL(state.user.baseUrl)
      }
      return state
    },
    saveState: (key, state, storage) => localStorage.setItem(key, JSON.stringify(state))

    // filter: (mutation) => {
    //   console.log(mutation)
    //   return mutation.type === 'user/login' || mutation.type === 'user/logout'
    // }
  })
  const playerStorage = new VuexPersistence({
    key: 'player',
    storage: window.localStorage,
    modules: ['player'],
    filter: mutation =>
      [
        'player/startPlaylist',
        'player/addToPlaylist',
        'player/removeFromPlaylist',
        'player/setTrack',
        'player/dragonDrop',
        'player/setTrack',
        'player/setVolume',
        'player/setActiveStream'
      ].includes(mutation.type),
    reducer: (state) => {
      debugger
      return {
        activeStream: state.player.activeStream,
        playlist: state.player.playlist,
        playlistIndex: state.player.playlistIndex,
        volume: state.player.volume
      }
    }
  })
  userStorage.plugin(store)
  playerStorage.plugin(store)
}
