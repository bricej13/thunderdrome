<template>
  <aside class="menu p-2">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <NuxtLink :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" />
          {{ item.title }}
        </NuxtLink>
        <ul v-if="item.children != null" class="menu-list">
          <li v-for="(child, key2) of item.children" :key="key2">
            <NuxtLink :to="child.to" exact-active-class="is-active">
              <b-icon :icon="child.icon" />
              {{ child.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <NuxtLink to="playlists" exact-active-class="is-active">
          <b-icon icon="playlist-music" />
          Playlists
        </NuxtLink>
        <ul class="menu-list">
          <li v-for="playlist of $store.state.playlists" :key="playlist.id">
            <NuxtLink :to="`/playlists/${playlist.id}`" exact-active-class="is-active">
              {{ playlist.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      items: [
        {
          title: 'Albums',
          icon: 'adjust',
          to: { name: 'albums' },
          children: [
            {
              title: 'All',
              icon: 'adjust',
              to: { name: 'albums', query: { sort: 'name', order: 'ASC', filter: {} } }
            },
            {
              title: 'Random',
              icon: 'shuffle',
              to: { name: 'albums', query: { sort: 'random', order: 'ASC', filter: {} } }
            },
            {
              title: 'Favorites',
              icon: 'heart-outline',
              to: { name: 'albums', query: { sort: 'started_at', order: 'DESC', filter: { starred: true } } }
            },
            {
              title: 'Top Rated',
              icon: 'star-outline',
              to: { name: 'albums', query: { sort: 'rating', order: 'DESC', filter: { has_rating: true } } }
            }
          ]
        },
        {
          title: 'Artists',
          icon: 'microphone-outline',
          to: { name: 'artists' }
        },
        {
          title: 'Songs',
          icon: 'music-note',
          to: { name: 'songs' }
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('loadPlaylists')
  }
}
</script>
