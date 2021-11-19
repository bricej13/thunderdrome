export default function (context) {
  // console.log(context)
  context.$axios.onRequest((config) => {
    if (context.store.getters['user/loggedIn']) {
      if (config.url.includes('api/')) { // native api
        config.headers['x-nd-authorization'] = 'Bearer ' + context.store.state.user.token
      } else if (config.url.includes('rest/')) { // subsonic api
        Object.assign(config.params, {
          u: context.store.state.user.name,
          t: context.store.state.user.subsonicToken,
          s: context.store.state.user.subsonicSalt,
          f: 'json',
          c: 'thunderdrome',
          v: '1.8.0'
        })
      } else {
        console.log('not authenticating to this endpoint!')
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
    if (to.name !== 'login' && !context.store.state.user.token) {
      next({ name: 'login', hash: 'timeoutReminder' })
    } else {
      next()
    }
  })
}
