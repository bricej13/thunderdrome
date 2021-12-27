export default function ({ $axios, store }, inject) {
  const apiKey = 'redacted'
  inject('fanart', {
    album: {
      get: albumId => $axios.$get(`http://webservice.fanart.tv/v3/music/albums/${albumId}?api_key=${apiKey}`)
    },
    artist: {
      get: artistId => $axios.$get(`http://webservice.fanart.tv/v3/music/${artistId}?api_key=${apiKey}`)
    }
  })
}
