<template>
  <b-taglist>
    <b-tag
      v-for="(genre, i) in genres"
      :key="genre.id"
      size="is-medium"
      class="is-clickable"
      :type="`${classes[i % classes.length]}`"
      @click="$router.push({ name: linkTo, query: { _order: 'DESC', _sort: 'playCount', genre_id: genre.id } })"
    >
      {{ genre.name }}
    </b-tag>
  </b-taglist>
</template>

<script>
export default {
  name: 'GenreTags',
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
