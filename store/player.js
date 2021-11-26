export const state = () => ({
  playlist: [],
  playlistIndex: 0,
  volume: 0.5,
  playing: false,
  trackDuration: 0,
  currentTime: 0,
  activeStream: null
})

export const mutations = {
  setActiveStream (state, payload) {
    state.activeStream = payload
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
  shufflePlaylist (state) {
    const otherTracks = state.playlist.filter((t, i) => i !== state.playlistIndex)
    otherTracks.sort((a, b) => 0.5 - Math.random())
    state.playlist = [state.playlist[state.playlistIndex], ...otherTracks]
    state.playlistIndex = 0
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
  loadAudioSrc ({ state, getters, dispatch, commit }) {
    commit('setActiveStream', getters.currentStream)

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
      navigator.mediaSession.setActionHandler('seekto', function (seek) { console.log('seekTo', seek) })
      navigator.mediaSession.setActionHandler('previoustrack', function () { dispatch('prevTrack') })
      navigator.mediaSession.setActionHandler('nexttrack', function () { dispatch('nextTrack') })
      // rest/scrobble?u=***REMOVED***&t=5f24cb316cc29ee8b70c6f99c6e50a2c&s=bc2671&f=json&v=1.8.0&c=NavidromeUI&
      // id=f003fe2c06a336ca942f7934a16706ac
      // &submission=false
    }
    dispatch('scrobble', getters.currentTrack.id)
  },
  scrobble (ctx, trackId) {
    this.$axios.$get('/rest/scrobble', {
      params: {
        id: trackId,
        submission: true
      }
    })
  },
  setPlay ({ state, commit }, payload) {
    if (payload === true) {
      navigator.mediaSession.playbackState = 'playing'
    } else if (payload === false) {
      navigator.mediaSession.playbackState = 'paused'
    } else {
      commit('setPlay', null)
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
  shuffleQueue ({ commit, state, dispatch }) {
    commit('shufflePlaylist')
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
    if (state.playlistIndex < (state.playlist.length - 1)) {
      dispatch('setTrack', state.playlistIndex + 1)
    }
  },
  setTrack ({ state, commit, getters, dispatch }, i) {
    commit('setTrack', i)
    dispatch('loadAudioSrc')
  },
  dragonDrop ({ state, commit }, payload) {
    commit('dragonDrop', payload)
  },
  volumeUp ({ state, commit }) {
    commit('setVolume', Math.min(1, state.volume + 0.1))
  },
  volumeDown ({ state, commit }) {
    commit('setVolume', Math.max(0, state.volume - 0.1))
  },
  volumeTo ({ state, commit }, payload) {
    if (payload >= 0 && payload <= 1) {
      commit('setVolume', payload)
    }
  }
}
export const getters = {
  playlist: state => state.playlist,
  hasQueue: state => state.playlist.length > 0,
  i: state => state.playlistIndex,
  streamList: (state, getters, rootState, rootGetters) => {
    return state.playlist
      .map(t => getters.streamUrl(t)) ||
      []
  },
  streamUrl: (state, getters, rootState, rootGetters) => t => `${rootGetters['user/subsonicUrl']('stream')}&id=${t.mediaFileId || t.id}&_${new Date().getTime()}`,
  currentStream: (state, getters) => getters.streamList[getters.i],
  nextStream: (state, getters) => getters.streamList[getters.i + 1],
  nextTrack: (state, getters) => getters.playlist[getters.i + 1],
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
  albumArtUrl: (state, getters, rootState, rootGetters) => (albumId) => {
    if (getters.currentTrack == null) { return null }
    return `${rootGetters['user/subsonicUrl']('getCoverArt')}&id=${albumId}&size=300`
  },
  albumArt: (state, getters, rootState, rootGetters) => {
    if (getters.currentTrack == null) { return null }
    return `${rootGetters['user/subsonicUrl']('getCoverArt')}&id=${getters.currentTrack.albumId}&size=300`
  },
  volume: state => state.volume,
  activeStream: state => state.activeStream
}
