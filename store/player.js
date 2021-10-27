export const state = () => ({
  playlist: [],
  playlistIndex: 0,
  volume: 0.5,
  playing: false,
  trackDuration: 0,
  currentTime: 0
})

export const mutations = {
  setPlaylist (state, payload) {
    state.playlist = payload
  },
  startPlaylist (state, payload) {
    state.playlist = payload
    state.playlistIndex = 0
    state.playing = true
  },
  shufflePlaylist (state, payload) {
    const shuffled = [...payload]
    shuffled.sort((a, b) => 0.5 - Math.random())
    state.playlist = shuffled
    state.playlistIndex = 0
    state.playing = true
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
  setCurrentTime (state, payload) {
    state.currentTime = payload
  },
  setTrackDuration (state, payload) {
    state.trackDuration = payload
  }
}

export const actions = {
}
export const getters = {
  playlist: state => state.playlist,
  i: state => state.playlistIndex,
  streamList: (state, getters, rootState, rootGetters) => {
    return state.playlist
      .map(t => `${rootGetters['user/subsonicUrl']('stream')}&id=${t.mediaFileId}&_${new Date().getTime()}`) ||
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
