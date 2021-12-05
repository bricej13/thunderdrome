<template>
  <div>
    <div v-for="(category, i) in index" :key="category.name" class="is-flex is-flex-direction-column">
      <color-header :i="i" style="position: sticky; top: 0px;" class="has-text-centered">
        {{ category.name }}
      </color-header>
      <nuxt-link
        v-for="artist in category.artist"
        :key="artist.id"
        :to="{name: 'artists-id', params: {id: artist.id} }"
        class="p-2 is-size-5 is-display-block artist-link"
      >
        {{ artist.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Directory',
  async asyncData ({ $api, params }) {
    const index = await $api.directory.index(params.folderId)
    return { folderId: params.folderId, index }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.artist-link:hover {
  background-color: #f0f0f0;
}
</style>
