export default function (context) {
  // console.log(context)
  context.$axios.onRequest((config) => {
    config.headers['x-nd-authorization'] = 'Bearer ' + context.store.state.user.token
    if (context.store.getters['user/loggedIn']) {
      if (config.url.includes('api/')) { // native api
      } else if (config.url.includes('rest/')) { // subsonic api
        // config.headers['x-nd-authorization'] = 'Bearer ' + store.state.user.token
        console.error('REQUESTING SUBSONIC API and you haven\'t added the query auth params ;()')
      } else {
        console.log('not authenticating to this endpoint!')
      }
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
      next({ name: 'login' })
    } else {
      next()
    }
  })
}
