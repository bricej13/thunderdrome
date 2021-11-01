<template>
  <aside class="block">
    <!--    {-->
    <!--    title: 'Songs',-->
    <!--    icon: 'music-note',-->
    <!--    to: { name: 'songs' },-->
    <!--    },-->
    <!--    {-->
    <!--    title: 'Playlists',-->
    <!--    icon: 'playlist-music',-->
    <!--    to: { name: 'playlists' },-->
    <!--    },-->
    <NuxtLink :to="{name: 'albums'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="adjust" />
          Albums
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'artists'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="microphone-outline" />
          Artists
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'songs'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="music-note" />
          Songs
        </div>
      </div>
    </NuxtLink>
    <NuxtLink :to="{name: 'playlists'}" exact-active-class="is-active" class="p-4 menu-item ">
      <div class="level">
        <div class="level-left">
          <b-icon icon="playlist-music" />
          Playlists
        </div>
      </div>
      <NuxtLink
        v-for="playlist of playlistLinks"
        :key="playlist.id"
        :to="playlist.to"
        exact-active-class="is-active"
        class="py-2 pl-5 menu-item"
      >
        <div class="level">
          <div class="level-left">
            <b-icon v-if="playlist.icon" :icon="playlist.icon" />
            {{ playlist.title }}
          </div>
        </div>
      </NuxtLink>
    </NuxtLink>

    <!--    <b-collapse-->
    <!--      v-for="(item, key) of items"-->
    <!--      :key="key"-->
    <!--      :open="isOpen === key"-->
    <!--      animation="slide"-->
    <!--      class="menu-item"-->
    <!--      @open="isOpen = key"-->
    <!--    >-->
    <!--      <template #trigger="props">-->
    <!--        <NuxtLink :to="item.to" exact-active-class="is-active" class="p-4">-->
    <!--          <div class="level">-->
    <!--            <div class="level-left">-->
    <!--              <b-icon :icon="item.icon" />-->
    <!--              {{ item.title }}-->
    <!--              <b-icon-->
    <!--                v-if="item.children.length > 0"-->
    <!--                :icon="props.open ? 'menu-down' : 'menu-up'"-->
    <!--              />-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </NuxtLink>-->
    <!--      </template>-->
    <!--      <div v-for="(child, key2) of item.children" :key="key2">-->
    <!--        <NuxtLink :to="child.to" exact-active-class="is-active" class="py-2 pl-5">-->
    <!--          <div class="level">-->
    <!--            <div class="level-left">-->
    <!--              <b-icon v-if="child.icon" :icon="child.icon" />-->
    <!--              {{ child.title }}-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </NuxtLink>-->
    <!--      </div>-->
    <!--    </b-collapse>-->
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters('playlists', [
      'playlists',
      'playlistLinks'
    ])
  },
  mounted () {
    this.$store.dispatch('playlists/loadPlaylists')
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.menu-item {
    color: $black !important;
    display: block;

    &:hover {
      color: white !important;
    }

    &.is-active {
      text-decoration: underline;
    }

}

aside > a.menu-item {
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
