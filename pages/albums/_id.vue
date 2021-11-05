<template>
  <div>
    <div class="is-flex is-flex-direction-row is-align-items-start mb-4">
      <div class="m-2">
        <album-art :album="album" />
      </div>
      <div class="is-flex-grow-1 pl-1">
        <div class="title is-size-1">
          {{ album.name }}
        </div>
        <div class="subtitle is-3">
          <NuxtLink :to="{name: 'artists-id', params: {id: album.artistId}}">
            {{ album.artist }}
          </NuxtLink>
        </div>
      </div>
      <div class="">
        <play-controls :tracks="tracks" />
      </div>

    <!--    <pre>{{ album }}</pre>-->
    </div>
    <track-list :tracks="tracks" />
    <!--    <Container group-name="track-target" behaviour="move" :get-child-payload="getChildPayload" @drop="onDrop">-->
    <!--      <Draggable v-for="item in tracks" :key="item.id">-->
    <!--        <div class="draggable-item">-->
    <!--          {{ item.title }}-->
    <!--        </div>-->
    <!--      </Draggable>-->
    <!--    </Container>-->
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
export default {
  name: 'Album',
  // eslint-disable-next-line vue/no-unused-components
  components: { Container, Draggable },
  async asyncData ({ $axios, store, params }) {
    // https://***REMOVED***/api/album/4b546861fec61762dc0ad781801cd9b4
    const album = await $axios.$get(
      `api/album/${params.id}`
    )
    const tracks = await $axios.$get(
      // https://***REMOVED***/api/song?_end=0&_order=ASC&_sort=album&_start=0&album_id=4b546861fec61762dc0ad781801cd9b4
      `api/song/?_start=0&_end=0&_sort=album&album_id=${params.id}`
    )
    return { album, tracks }
  },
  head () {
    return {
      title: `Thunderdrome - ${this.album.name}`
    }
  },
  methods: {
    getChildPayload (index) {
      return this.tracks[index]
    },
    onDrop (dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult
      if (removedIndex === null && addedIndex === null) { return this.tracks }

      const result = [...this.tracks]
      let itemToAdd = payload

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }

      this.tracks = result
    }
  }
}
</script>

<style scoped>

</style>
