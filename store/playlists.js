export const state = () => ({
  playlists: [],
  playlistTracks: {}
})

export const mutations = {
  setPlaylists (state, payload) {
    state.playlists = payload
  },
  setPlaylistTracks (state, { playlistId, tracks }) {
    state.playlistTracks = { ...state.playlistTracks, [playlistId]: tracks }
  }
}

export const actions = {
  loadPlaylists (context) {
    return this.$api.playlist.all().then(res =>
      context.commit('setPlaylists', res)
    )
  },
  loadPlaylistTracks (context, playlistId) {
    this.$api.playlist.tracks(playlistId).then(tracks =>
      context.commit('setPlaylistTracks', { playlistId, tracks })
    )
  },
  addTracksToPlaylist (context, { playlistId, tracks }) {
    this.$api.playlist.addTracks(playlistId, tracks)
      .then(res => context.dispatch('loadPlaylistTracks', playlistId))
  },
  updatePlaylist (context, playlist) {
    return this.$api.playlist.update(playlist).then((res) => {
      context.commit('setPlaylists', context.state.playlists.map((p) => {
        return p.id === res.id ? res : p
      }))
    })
  },
  deletePlaylist (context, playlistId) {
    return this.$api.playlist.delete(playlistId).then((res) => {
      context.commit('setPlaylists', context.state.playlists.filter(p => p.id !== playlistId))
    })
  }
}
export const getters = {
  getPlaylist: state => (id) => {
    return state.playlists.find(p => p.id === id)
  },
  playlistTracksLoaded: state => (id) => {
    return state.playlistTracks[id] != null
  },
  getPlaylistTracks: state => (id) => {
    return state.playlistTracks[id]
  },
  playlists: (state) => {
    return state.playlists
  },
  playlistLinks: state =>
    state.playlists.map((p) => {
      return {
        id: p.id,
        title: p.name,
        to: { name: 'playlists-id', params: { id: p.id } }
      }
    })
}
