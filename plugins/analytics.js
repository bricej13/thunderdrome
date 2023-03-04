export default function (context) {
  context.app.router.beforeEach((to, from, next) => {
    const path = to?.matched[0]?.path
    const plausible = window.plausible
    if (path && plausible) {
      const u = window.location.origin + path
      const domain = window.location.host
      document.querySelector('script[src*="plausible"]').setAttribute('data-domain', domain)
      plausible('pageview', { u })
    }

    next()
  })
}
