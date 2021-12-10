import Dexie from 'dexie'
export default function ({ $axios }, inject) {
  const dexie = new Dexie('thunderdrome')
  dexie.version(1).stores({
    tracks: 'id, lastAccessed'
  })
  inject('db', dexie)
}
