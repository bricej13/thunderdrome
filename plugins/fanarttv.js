export default function ({ $axios, store }, inject) {
  const apiKey = '02459dbdbdc09e1e34f2653dc6cd591d'
  inject('fanart', {
    album: {
      get: albumId => $axios.$get(`http://webservice.fanart.tv/v3/music/albums/${albumId}?api_key=${apiKey}`)
    },
    artist: {
      get: artistId => $axios.$get(`http://webservice.fanart.tv/v3/music/${artistId}?api_key=${apiKey}`)
    }
  })
}
