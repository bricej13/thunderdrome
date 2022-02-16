export default function ({ $axios, store }, inject) {
  inject('api', {
    album: {
      get: albumId => $axios.$get(`api/album/${albumId}`),
      tracks: albumId => $axios.get('api/song/',
        { params: { _start: 0, _end: 0, _sort: 'trackNumber', album_id: albumId } }
      ).then((res) => { return { tracks: res.data, total: res.headers['x-total-count'] } }),
      where: params => $axios.$get('api/album', {
        params: Object.assign({}, { _start: 0, _end: 20, _order: 'ASC', _sort: 'name' }, params)
      }),
      search: name =>
        $axios.$get(
          '/api/album', {
            params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
          }
        )
    },
    artist: {
      search: name => $axios.get('/api/artist', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'name', name }
      }).then((res) => { return { artists: res.data, total: res.headers['x-total-count'] } }),
      where: params => $axios.get('api/artist', {
        params: Object.assign({ _start: 0, _end: 20, _order: 'ASC', _sort: 'name' }, params)
      }).then((res) => { return { artists: res.data, total: res.headers['x-total-count'] } }),
      get: artistId => $axios.$get(`api/artist/${artistId}`),
      albums: artistId => $axios.$get('/api/album', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'minYear', artist_id: artistId }
      }),
      tracks: artistId => $axios.get('/api/song', {
        params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'year,albumId,trackNumber', artist_id: artistId }
      }).then((res) => { return { tracks: res.data, total: res.headers['x-total-count'] } }),
      loadExternalBio: artistId =>
        $axios.$get('/rest/getArtistInfo', {
          params: { id: artistId }
        })
    },
    track: {
      all: params => $axios.get('api/song', {
        params: Object.assign({ _start: 0, _end: 10, _order: 'ASC', _sort: 'title' }, params)
      }).then((res) => { return { tracks: res.data, total: res.headers['x-total-count'] } }),
      get: () => [],
      search: title => $axios.get('/api/song', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'title', title }
      }).then((res) => { return { tracks: res.data, total: res.headers['x-total-count'] } }),
      scrobble: trackId => $axios.$get('/rest/scrobble', {
        params: {
          id: trackId,
          submission: true
        }
      }),
      mediaFile: id => $axios.get(
          `${store.getters['user/subsonicUrl']('stream')}&id=${id}&_${new Date().getTime()}`,
          { responseType: 'arraybuffer' }
      )
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
      get: playlistId => $axios.$get(`api/playlist/${playlistId}`),
      update: playlist => $axios.$put(`api/playlist/${playlist.id}`, playlist),
      delete: playlistId => $axios.$delete(`api/playlist/${playlistId}`),
      tracks: playlistId => $axios.$get(`api/playlist/${playlistId}/tracks`),
      addTracks: (playlistId, trackIds) => $axios.$post(`api/playlist/${playlistId}/tracks`, { ids: trackIds }),
      deleteTracks: (playlistId, trackIds) => $axios.$delete(`api/playlist/${playlistId}/tracks?id=${trackIds.join('&id=')}`)
    },
    directory: {
      get: id => $axios.$get('rest/getMusicDirectory', { params: { id } }),
      index: async (folderId) => {
        const resp = await $axios.$get('rest/getIndexes', { params: { musicFolderId: folderId } })
        return resp['subsonic-response'].indexes.index
      },
      rootDirectories: async () => {
        const resp = await $axios.$get('rest/getMusicFolders')
        return resp['subsonic-response'].musicFolders.musicFolder
      }
    },
    genre: {
      all: () => $axios.$get('api/genre', { params: { _start: 0, _end: 0, _order: 'ASC', _sort: 'name' } }),
      where: params => $axios.$get('api/genre', {
        params: Object.assign({ _start: 0, _end: 0, _order: 'ASC', _sort: 'name' }, params)
      })
    },
    login: (username, password, baseUrl) => $axios.$post(baseUrl + '/auth/login', { username, password }),
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
    }),
    startScan: fullScan => $axios.$get('rest/startScan', { params: { fullScan } })
  })
}
