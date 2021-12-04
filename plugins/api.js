export default function ({ $axios }, inject) {
  inject('api', {
    album: {
      get: albumId => $axios.$get(`api/album/${albumId}`),
      tracks: albumId => $axios.$get('api/song/',
        { params: { _start: 0, _end: 0, _sort: 'trackNumber', album_id: albumId } }
      ),
      search: name =>
        $axios.$get(
          '/api/album', {
            params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
          }
        )
    },
    artist: {
      search: name => $axios.$get('/api/artist', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
      }),
      get: artistId => $axios.$get(`api/artist/${artistId}`),
      albums: artistId => $axios.$get('/api/album', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'minYear', artist_id: artistId }
      }),
      tracks: artistId => $axios.$get('/api/song', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'year', artist_id: artistId }
      }),
      loadExternalBio: artistId =>
        $axios.$get('/rest/getArtistInfo', {
          params: { id: artistId }
        })
    },
    track: {
      all: params => $axios.$get('api/song', {
        params: Object.assign({ _start: 0, _end: 10, _order: 'ASC', _sort: 'title' }, params)
      }),
      get: () => [],
      search: title => $axios.$get(
        '/api/song', {
          params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'title', title }
        }
      ),
      scrobble: trackId => $axios.$get('/rest/scrobble', {
        params: {
          id: trackId,
          submission: true
        }
      })
    },
    playlist: {
      all: params => $axios.$get('api/playlist', {
        params: Object.assign({
          _start: 0,
          _end: 0,
          _sort: 'name'
        }, params)
      }),
      create: p => $axios.$post('api/playlist/', p),
      get: playlistId => $axios.$get(`api/playlist/${playlistId}/tracks`),
      update: playlist => $axios.$put(`api/playlist/${playlist.id}`, playlist),
      delete: playlistId => $axios.$delete(`api/playlist/${playlistId}`),
      tracks: playlistId => $axios.$get(`api/playlist/${playlistId}/tracks`),
      addTracks: (playlistId, trackIds) => $axios.$post(`api/playlist/${playlistId}/tracks`, { ids: trackIds })
    },
    setRating: (id, rating) => new Promise((resolve, reject) => {
      $axios.$get('/rest/setRating', { params: { id, rating } })
        .then((res) => {
          if (res['subsonic-response'].status === 'ok') {
            resolve()
          } else {
            reject(new Error(res['subsonic-response'].error))
          }
        }).catch(err => reject(err))
    }),
    setFavorite: (id, isFavorite) => new Promise((resolve, reject) => {
      $axios.$get(isFavorite ? '/rest/star' : '/rest/unstar', { params: { id } })
        .then((res) => {
          if (res['subsonic-response'].status === 'ok') {
            resolve()
          } else {
            reject(new Error(res['subsonic-response'].error))
          }
        }).catch(err => reject(err))
    })
  }
  )
}
