export const state = () => ({
  playlists: []
})

export const mutations = {
  setPlaylists (state, payload) {
    state.playlists = payload
  }
}

export const actions = {
  loadPlaylists (context) {
    this.$axios.$get('api/playlist?_end=0&_sort=name&_start=-100').then(res =>
      context.commit('setPlaylists', res)
    )
  }
}
export const getters = {
  playlist: state => (id) => {
    return state.playlists.find(p => p.id === id)
  }
}
