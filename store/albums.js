
export const state = () => ({
})

export const mutations = {
}

export const actions = {
  get (ctx, albumId) {
    return this.$axios.$get(`api/album/${albumId}`)
  },
  getTracks (ctx, albumId) {
    return this.$axios.$get(
      'api/song/',
      { params: { _start: 0, _end: 0, _sort: 'trackNumber', album_id: albumId } }
    )
  },
  albumSearch (ctx, name) {
    return this.$axios.$get(
      '/api/album', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
      }
    )
  }
}
export const getters = {
}
