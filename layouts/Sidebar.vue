<template>
  <aside class="block">
    <b-collapse
      v-for="(item, key) of items"
      :key="key"
      :open="isOpen === key"
      animation="slide"
      class="menu-item"
      @open="isOpen = key"
    >
      <template #trigger="props">
        <NuxtLink :to="item.to" exact-active-class="is-active" class="p-4">
          <div class="level">
            <div class="level-left">
              <b-icon :icon="item.icon" />
              {{ item.title }}
              <b-icon
                v-if="item.children.length > 0"
                :icon="props.open ? 'menu-down' : 'menu-up'"
              />
            </div>
          </div>
        </NuxtLink>
      </template>
      <div v-for="(child, key2) of item.children" :key="key2">
        <NuxtLink :to="child.to" exact-active-class="is-active" class="py-2 pl-5">
          <div class="level">
            <div class="level-left">
              <b-icon v-if="child.icon" :icon="child.icon" />
              {{ child.title }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </b-collapse>
    <!--    <div v-for="playlist of $store.state.playlists" :key="playlist.id" class="menu-item">-->
    <!--      <NuxtLink :to="`/playlists/${playlist.id}`" exact-active-class="is-active">-->
    <!--        {{ playlist.name }}-->
    <!--      </NuxtLink>-->
    <!--    </div>-->
  </aside>
<!--  <aside class="menu p-2">-->
<!--    <p class="menu-label">-->
<!--      General-->
<!--    </p>-->
<!--    <ul class="menu-list">-->
<!--      <li v-for="(item, key) of items" :key="key">-->
<!--        <NuxtLink :to="item.to" exact-active-class="is-active">-->
<!--          <b-icon :icon="item.icon" />-->
<!--          {{ item.title }}-->
<!--        </NuxtLink>-->
<!--        <ul v-if="item.children != null" class="menu-list">-->
<!--          <li v-for="(child, key2) of item.children" :key="key2">-->
<!--            <NuxtLink :to="child.to" exact-active-class="is-active">-->
<!--              <b-icon :icon="child.icon" />-->
<!--              {{ child.title }}-->
<!--            </NuxtLink>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li>-->
<!--        <NuxtLink to="playlists" exact-active-class="is-active">-->
<!--          <b-icon icon="playlist-music" />-->
<!--          Playlists-->
<!--        </NuxtLink>-->
<!--        <ul class="menu-list">-->
<!--          <li v-for="playlist of $store.state.playlists" :key="playlist.id">-->
<!--            <NuxtLink :to="`/playlists/${playlist.id}`" exact-active-class="is-active">-->
<!--              {{ playlist.name }}-->
<!--            </NuxtLink>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </aside>-->
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      isOpen: 3,
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
          to: { name: 'artists' },
          children: []
        },
        {
          title: 'Songs',
          icon: 'music-note',
          to: { name: 'songs' },
          children: []
        },
        {
          title: 'Playlists',
          icon: 'playlist-music',
          to: { name: 'playlists' },
          children: []
        },
        {
          title: 'Settings',
          icon: 'cog-outline',
          to: { name: 'settings' },
          children: []
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('loadPlaylists')
      .then(() => {
        const playlistLinks = this.$store.state.playlists
          .map((p) => {
            return {
              title: p.name,
              // icon: 'playlist-music',
              to: { name: 'playlists-id', params: { id: p.id } }
            }
          })
        this.items[3].children = playlistLinks
        console.log(playlistLinks)
      })
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.menu-item {
  a {
    color: $black !important;
    display: block;

    &:hover {
      color: white !important;
    }

    &.is-active {
      text-decoration: underline;
    }
  }

  &:nth-child(1) {
    background-color: $ui3-yellow;
  }
  &:nth-child(2) {
    background-color: $ui3-orange;
  }
  &:nth-child(3) {
    background-color: $ui3-red;
  }
  &:nth-child(4) {
    background-color: $ui3-beet;
  }
  &:nth-child(5) {
    background-color: $ui3-fuchsia;
  }
  &:hover {
  }
}

</style>
