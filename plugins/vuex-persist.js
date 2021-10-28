import { VuexPersistence } from 'vuex-persist'

export default function ({ store }) {
  new VuexPersistence({
    key: 'thunderdrome',
    storage: window.localStorage,
    modules: ['user']
    // filter: mutation => mutation.type === 'login' || mutation.type === 'logout'
  }).plugin(store)
}
