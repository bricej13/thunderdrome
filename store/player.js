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
  setAudioControl (state, payload) {
    state.audioControl = payload
  },
  startPlaylist (state, payload) {
    state.playlist = payload.map((t, i) => Object.assign({ key: performance.now() + Math.random() }, t))
    state.playlistIndex = 0
  },
  addToPlaylist (state, { tracks, index }) {
    const tracksWithKey = tracks.map((t, i) => Object.assign({ key: performance.now() + Math.random() }, t))
    state.playlist.splice(index, 0, ...tracksWithKey)
    if (state.playlistIndex >= index) {
      state.playlistIndex = state.playlistIndex + tracks.length
    }
  },
  removeFromPlaylist (state, index) {
    const newList = state.playlist.filter((t, i) => i !== index)
    if (index > state.playlistIndex) {
      state.playlist = newList
    } else {
      state.playlist = newList
      state.playlistIndex = state.playlistIndex - 1
    }
  },
  setPlay (state, payload) {
    state.playing = payload
  },
  setVolume (state, payload) {
    state.volume = payload
  },
  setTrack (state, i) {
    state.playlistIndex = i
  },
  setCurrentTime (state, payload) {
    state.currentTime = payload
  },
  setTrackDuration (state, payload) {
    state.trackDuration = payload
  },
  dragonDrop (state, { addedIndex, removedIndex, payload }) {
    const moved = removedIndex != null ? state.playlist.splice(removedIndex, 1)[0] : payload
    state.playlist.splice(addedIndex, 0, moved)
    if (state.playlistIndex === removedIndex) {
      state.playlistIndex = addedIndex
    } else if (addedIndex >= state.playlistIndex && removedIndex < state.playlistIndex) {
      state.playlistIndex = state.playlistIndex - 1
    } else if (addedIndex <= state.playlistIndex && removedIndex > state.playlistIndex) {
      state.playlistIndex = state.playlistIndex + 1
    }
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
      navigator.mediaSession.setActionHandler('play', function () { dispatch('setPlay', true) })
      navigator.mediaSession.setActionHandler('pause', function () { dispatch('setPlay', false) })
      navigator.mediaSession.setActionHandler('stop', function () { dispatch('setPlay', false) })
      navigator.mediaSession.setActionHandler('seekbackward', function (a) { console.log('seekbackward', a) })
      navigator.mediaSession.setActionHandler('seekforward', function (a) { console.log('seekforward', a) })
      navigator.mediaSession.setActionHandler('seekto', function (seek) { dispatch('seekTo', seek.seekTime) })
      navigator.mediaSession.setActionHandler('previoustrack', function () { dispatch('prevTrack') })
      navigator.mediaSession.setActionHandler('nexttrack', function () { dispatch('nextTrack') })
    }
  },
  setPlay ({ state, commit }, payload) {
    if (payload === true) {
      state.audioControl.play()
      navigator.mediaSession.playbackState = 'playing'
    } else if (payload === false) {
      state.audioControl.pause()
      navigator.mediaSession.playbackState = 'paused'
    } else {
      state.audioControl.src = null
      navigator.mediaSession.playbackState = 'none'
    }
    commit('setPlay', payload)
  },
  startPlaylist ({ commit, getters, state, dispatch }, payload) {
    commit('startPlaylist', payload)
    dispatch('loadAudioSrc')
    dispatch('setPlay', true)
  },
  appendToPlaylist ({ commit, state }, tracks) {
    commit('addToPlaylist', { tracks, index: state.playlist.length })
  },
  removeFromPlaylist ({ commit }, index) {
    commit('removeFromPlaylist', index)
  },
  clearQueue ({ commit, dispatch }) {
    dispatch('setPlay', null)
    commit('startPlaylist', [])
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
  },
  seekTo ({ state }, time) {
    state.audioControl.currentTime = time
  },
  seekToPct ({ state }, pct) {
    state.audioControl.currentTime = state.trackDuration * pct
  },
  dragonDrop ({ state, commit }, payload) {
    commit('dragonDrop', payload)
  },
  volumeUp ({ state, commit }) {
    state.audioControl.volume = Math.min(1, state.audioControl.volume + 0.1).toPrecision(2)
    commit('setVolume', state.audioControl.volume)
  },
  volumeDown ({ state, commit }) {
    state.audioControl.volume = Math.max(0, state.audioControl.volume - 0.1).toPrecision(2)
    commit('setVolume', state.audioControl.volume)
  },
  volumeTo ({ state, commit }, payload) {
    state.audioControl.volume = payload.toPrecision(2)
    commit('setVolume', state.audioControl.volume)
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
  },
  volume: state => state.volume
}
