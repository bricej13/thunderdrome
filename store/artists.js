export const state = () => ({
})

export const mutations = {
}

export const actions = {
  artistSearch (ctx, name) {
    return this.$axios.$get(
      '/api/artist', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
      }
    )
  },
  get (ctx, artistId) {
    return this.$axios.$get(
      `api/artist/${artistId}`
    )
  },
  getAlbums (ctx, artistId) {
    return this.$axios.$get(
      '/api/album', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'maxYear', artist_id: artistId }
      })
  },
  getTracks (ctx, artistId) {
    return this.$axios.$get(
      '/api/song', {
        params: { _start: 0, _end: 0, _order: 'ASC', artist_id: artistId }
      }
    )
  },
  loadExternalBio (ctx, artistId) {
    return this.$axios.$get('/rest/getArtistInfo', {
      params: {
        id: artistId
      }
    })
  }
}

export const getters = {
}
