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
    return this.$axios.$get('api/playlist?_end=0&_sort=name&_start=-100').then(res =>
      context.commit('setPlaylists', res)
    )
  },
  loadPlaylistTracks (context, playlistId) {
    return this.$axios.$get(
      `api/playlist/${playlistId}/tracks`
    ).then(tracks =>
      context.commit('setPlaylistTracks', { playlistId, tracks })
    )
  },
  addTracksToPlaylist (context, { playlistId, tracks }) {
    // tracks is a list of track ids
    // https://navidrome.com/api/playlist/5334f9f2-4617-4a2a-befc-f02d946cefd1/tracks
    this.$axios.$post(`api/playlist/${playlistId}/tracks`, { ids: tracks })
      .then(res => context.dispatch('loadPlaylistTracks', playlistId))
  },
  updatePlaylist (context, playlist) {
    return this.$axios.$put(`api/playlist/${playlist.id}`, playlist).then((res) => {
      context.commit('setPlaylists', context.state.playlists.map((p) => {
        return p.id === res.id ? res : p
      }))
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
