import { VuexPersistence } from 'vuex-persist'

export default function ({ store, $axios }) {
  const vp = new VuexPersistence({
    key: 'thunderdrome',
    storage: window.localStorage,
    modules: ['user'],
    restoreState: (key, storage) => {
      const state = JSON.parse(localStorage.getItem(key))
      if (state.user) {
        $axios.setBaseURL(state.user.baseUrl)
      }
      return state
    },
    saveState: (key, state, storage) => localStorage.setItem(key, JSON.stringify(state))

    // filter: (mutation) => {
    //   console.log(mutation)
    //   return mutation.type === 'user/login' || mutation.type === 'user/logout'
    // }
  })
  vp.plugin(store)
}
