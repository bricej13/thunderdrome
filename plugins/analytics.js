export default function (context) {
  context.app.router.beforeEach((to, from, next) => {
    const path = to?.matched[0]?.path
    const plausible = window.plausible
    if (path && plausible) {
      const u = window.location.origin + path
      plausible('pageview', { u })
    }

    next()
  })
}
