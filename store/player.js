export const state = () => ({
  playlist: [],
  playlistIndex: 0,
  volume: 0.5,
  playing: false,
  trackDuration: 0,
  currentTime: 0,
  activeStream: null,
  bands: [
    { f: 60, type: 'lowshelf' },
    { f: 170, type: 'peaking' },
    { f: 310, type: 'peaking' },
    { f: 600, type: 'peaking' },
    { f: 1000, type: 'peaking' },
    { f: 3000, type: 'peaking' },
    { f: 6000, type: 'peaking' },
    { f: 12000, type: 'peaking' },
    { f: 14000, type: 'peaking' },
    { f: 16000, type: 'highshelf' }
  ],
  bandValues: { name: 'Flat', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  presets: [
    { name: 'Classical', values: [0, 0, 0, 0, 0, 0, -4.73, -4.73, -4.73, -6.18] },
    { name: 'Club', values: [0, 0, 1.82, 3.27, 3.27, 3.27, 1.82, 0, 0, 0] },
    { name: 'Dance', values: [5.45, 4, 1.09, -0.36, -0.36, -4, -4.73, -4.73, -0.36, -0.36] },
    { name: 'Flat', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: 'Laptop speakers/headphones', values: [2.55, 6.18, 2.91, -2.55, -1.82, 0.73, 2.55, 5.45, 7.27, 8.36] },
    { name: 'Large hall', values: [5.82, 5.82, 3.27, 3.27, 0, -3.27, -3.27, -3.27, 0, 0] },
    { name: 'Party', values: [4, 4, 0, 0, 0, 0, 0, 0, 4, 4] },
    { name: 'Pop', values: [-1.45, 2.55, 4, 4.36, 2.91, -1.09, -1.82, -1.82, -1.45, -1.45] },
    { name: 'Reggae', values: [0, 0, -0.73, -4, 0, 3.64, 3.64, 0, 0, 0] },
    { name: 'Rock', values: [4.36, 2.55, -3.64, -5.09, -2.55, 2.18, 5.09, 6.18, 6.18, 6.18] },
    { name: 'Soft', values: [2.55, 0.73, -1.09, -1.82, -1.09, 2.18, 4.73, 5.45, 6.18, 6.91] },
    { name: 'Ska', values: [-1.82, -3.27, -2.91, -0.73, 2.18, 3.27, 5.09, 5.45, 6.18, 5.45] },
    { name: 'Full Bass', values: [5.45, 5.45, 5.45, 3.27, 0.73, -2.91, -5.45, -6.55, -6.91, -6.91] },
    { name: 'Soft Rock', values: [2.18, 2.18, 1.09, -0.73, -2.91, -3.64, -2.55, -0.73, 1.45, 5.09] },
    { name: 'Full Treble', values: [-6.18, -6.18, -6.18, -2.91, 1.45, 6.18, 9.09, 9.09, 9.09, 9.82] },
    { name: 'Full Bass & Treble', values: [4, 3.27, 0, -4.73, -3.27, 0.73, 4.73, 6.18, 6.91, 6.91] },
    { name: 'Live', values: [-3.27, 0, 2.18, 2.91, 3.27, 3.27, 2.18, 1.45, 1.45, 1.09] },
    { name: 'Techno', values: [4.36, 3.27, 0, -3.64, -3.27, 0, 4.36, 5.45, 5.45, 5.09] }
  ],
  compressor: {
    attack: 0.003,
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  }
})

export const mutations = {
  setActiveStream (state, payload) {
    state.activeStream = payload
  },
  startPlaylist (state, payload) {
    state.playlist = payload
    state.playlistIndex = 0
  },
  addToPlaylist (state, { tracks, index }) {
    state.playlist.splice(index, 0, ...tracks)
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
  },
  setFilterGain (state, { index, value }) {
    if (state.bandValues.isCustom) {
      state.bandValues.values[index] = value
    } else {
      state.bandValues = {
        name: 'Custom',
        isCustom: true,
        saved: false,
        values: state.bandValues.values.map((b, i) => i === index ? value : b)
      }
    }
  },
  setPreset (state, preset) {
    state.bandValues = preset
  },
  createPreset (state, name) {
    state.bandValues.name = name
    state.bandValues.saved = true
    state.presets.unshift(state.bandValues)
  },
  deletePreset (state, i) {
    state.presets.splice(i, 1)
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
      navigator.mediaSession.setActionHandler('nexttrack', function () { dispatch('playNextTrack') })
    }
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
  addToPlaylistNext ({ commit, state }, tracks) {
    commit('addToPlaylist', { tracks, index: Math.min(state.playlistIndex + 1, state.playlist.length) })
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
  playNextTrack ({ state, dispatch }) {
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
  },
  setFilterGain ({ commit }, payload) {
    commit('setFilterGain', payload)
  },
  setPreset ({ commit }, preset) {
    commit('setPreset', preset)
  },
  createPreset ({ commit }, name) {
    commit('createPreset', name)
  },
  deletePreset ({ commit, state }, i) {
    commit('deletePreset', i)
    commit('setPreset', state.presets.find(p => p.name === 'Flat'))
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
  albumArt: (state, getters, rootState, rootGetters) => {
    if (getters.currentTrack == null) { return null }
    return `${rootGetters['user/subsonicUrl']('getCoverArt')}&id=${getters.currentTrack.albumId}&size=300`
  },
  volume: state => state.volume,
  activeStream: state => state.activeStream,
  bands: state => state.bands,
  presets: state => state.presets,
  bandValues: state => state.bandValues,
  compressor: state => state.compressor
}
