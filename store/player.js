export const state = () => ({
  playlist: [],
  playlistIndex: 0,
  volume: 0.5,
  playing: false,
  trackDuration: 0,
  currentTime: 0,
  audioControl: null
})

export const mutations = {
  setPlaylist (state, payload) {
    state.playlist = payload
  },
  setAudioControl (state, payload) {
    state.audioControl = payload
  },
  startPlaylist (state, payload) {
    state.playlist = payload
    state.playlistIndex = 0
  },
  appendToPlaylist (state, tracks) {
    state.playlist = state.playlist.concat(tracks)
  },
  setPlay (state, payload) {
    state.playing = payload
  },
  setVolume (state, payload) {
    state.volume = payload
  },
  prevTrack (state) {
    if (state.playlistIndex > 0) {
      state.playlistIndex = state.playlistIndex - 1
    }
  },
  nextTrack (state) {
    if (state.playlistIndex < state.playlist.length) {
      state.playlistIndex = state.playlistIndex + 1
    }
  },
  setTrack (state, i) {
    state.playlistIndex = i
  },
  setCurrentTime (state, payload) {
    state.currentTime = payload
  },
  setTrackDuration (state, payload) {
    state.trackDuration = payload
  }
}

export const actions = {
  loadAudioSrc ({ state, getters, dispatch }) {
    state.audioControl.src = getters.currentStream
    if ('mediaSession' in navigator) {
      // eslint-disable-next-line no-undef
      navigator.mediaSession.metadata = new MediaMetadata({
        title: getters.currentTrack.title,
        artist: getters.currentTrack.artist,
        album: getters.currentTrack.album,
        artwork: [
          { src: getters.albumArt, sizes: '300x300', type: 'image/jpeg' }
        ]
      })
      navigator.mediaSession.setActionHandler('play', function () { state.audioControl.play() })
      navigator.mediaSession.setActionHandler('pause', function () { state.audioControl.pause() })
      navigator.mediaSession.setActionHandler('stop', function () { state.audioControl.pause() })
      navigator.mediaSession.setActionHandler('seekbackward', function () { /* Code excerpted. */ })
      navigator.mediaSession.setActionHandler('seekforward', function () { /* Code excerpted. */ })
      navigator.mediaSession.setActionHandler('seekto', function () { /* Code excerpted. */ })
      navigator.mediaSession.setActionHandler('previoustrack', function () { dispatch('prevTrack') })
      navigator.mediaSession.setActionHandler('nexttrack', function () { dispatch('nextTrack') })
    }
  },
  startPlaylist ({ commit, getters, state, dispatch }, payload) {
    commit('startPlaylist', payload)
    commit('setPlay', true)
    dispatch('loadAudioSrc')
  },
  appendToPlaylist (store, tracks) {
    store.commit('appendToPlaylist', tracks)
  },
  shufflePlaylist ({ dispatch }, payload) {
    const shuffled = [...payload]
    shuffled.sort((a, b) => 0.5 - Math.random())
    dispatch('startPlaylist', shuffled)
  },
  prevTrack ({ state, dispatch }) {
    if (state.playlistIndex > 0) {
      dispatch('setTrack', state.playlistIndex - 1)
    }
  },
  nextTrack ({ state, dispatch }) {
    if (state.playlistIndex < state.playlist.length) {
      dispatch('setTrack', state.playlistIndex + 1)
    }
  },
  setTrack ({ state, commit, getters, dispatch }, i) {
    commit('setTrack', i)
    dispatch('loadAudioSrc')
  }

}
export const getters = {
  playlist: state => state.playlist,
  hasQueue: state => state.playlist.length > 0,
  i: state => state.playlistIndex,
  streamList: (state, getters, rootState, rootGetters) => {
    return state.playlist
      .map(t => `${rootGetters['user/subsonicUrl']('stream')}&id=${t.mediaFileId || t.id}&_${new Date().getTime()}`) ||
      []
  },
  currentStream: (state, getters) => getters.streamList[getters.i],
  currentTrack: state => state.playlist[state.playlistIndex],
  hasNext: state => !(state.playlistIndex >= state.playlist.length),
  hasPrev: state => state.playlistIndex > 0,
  duration: state => state.trackDuration,
  currentTime: state => state.currentTime,
  progress (state) {
    if (state.duration === 0) { return 0 }
    return (state.currentTime / state.trackDuration) * 100
  },
  playing: state => state.playing,
  albumArt: (state, getters, rootState, rootGetters) => {
    if (getters.currentTrack == null) { return null }
    return `${rootGetters['user/subsonicUrl']('getCoverArt')}&id=${getters.currentTrack.albumId}&size=300`
  }
}
