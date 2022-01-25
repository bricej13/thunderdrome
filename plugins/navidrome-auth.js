export default function (context) {
  // console.log(context)
  context.$axios.onRequest((config) => {
    if (context.store.getters['user/loggedIn']) {
      if (config.url.includes('api/')) { // native api
        config.headers['x-nd-authorization'] = 'Bearer ' + context.store.getters['user/token']
      } else if (config.url.includes('rest/')) { // subsonic api
        config.params = Object.assign({ ...config.params }, {
          u: context.store.getters['user/username'],
          t: context.store.getters['user/subsonicToken'],
          s: context.store.getters['user/subsonicSalt'],
          f: 'json',
          c: 'thunderdrome',
          v: '1.8.0'
        })
      }
    }
  })
  context.$axios.onResponse((response) => {
    if (response.headers['x-nd-authorization'] != null) {
      context.store.commit('user/setToken', response.headers['x-nd-authorization'])
    }
  })
  context.$axios.onResponseError((err, err2) => {
    if (err.response.status === 401) {
      context.store.dispatch('user/logout')
      context.app.router.push({ name: 'login' })
    }
  })
  context.app.router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !context.store.getters['user/loggedIn']) {
      next({ name: 'login' })
    } else {
      next()
    }
  })
}
