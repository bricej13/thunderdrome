<template>
  <b-taglist>
    <b-tag v-for="(genre, i) in genres" :key="genre.id" size="is-medium" :type="`${classes[i % classes.length]}`">
      <nuxt-link
        :to="{ name: linkTo, query: { _order: 'DESC', _sort: 'playCount', genre_id: genre.id } }"
      >
        {{ genre.name }}
      </nuxt-link>
    </b-tag>
  </b-taglist>
</template>

<script>
export default {
  name: 'ArtistGenreTags',
  props: {
    genres: {
      type: Array,
      required: true
    },
    linkTo: {
      type: String,
      default: 'albums'
    }
  },
  data () {
    return {
      classes: [
        'is-yellow', 'is-orange', 'is-red', 'is-beet', 'is-fuchsia'
      ]
    }
  }
}
</script>

<style scoped>

</style>
