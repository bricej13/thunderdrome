// import VuexPersistence from 'vuex-persist'
//
// const vuexLocal = new VuexPersistence({
//   key: 'thunderdrome',
//   storage: window.localStorage,
//   modules: ['user'],
//   filter: mutation => mutation.type === 'login' || mutation.type === 'logout'
// })
//
// export const plugins = [vuexLocal.plugin]
export const state = () => ({
  tracks: []
})

export const mutations = {
}

export const actions = {
  trackSearch (ctx, title) {
    return this.$axios.$get(
      '/api/song', {
        params: { _start: 0, _end: 12, _order: 'ASC', _sort: 'title', title }
      }
    )
  }
}
export const getters = {
}
