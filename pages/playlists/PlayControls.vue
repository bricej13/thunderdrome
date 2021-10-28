<template>
  <div class="level-right">
    <b-tooltip
      label="play"
      position="is-left"
      type="is-dark"
      square
    >
      <div
        class="p-1 is-clickable"
        @click="$store.commit('player/startPlaylist', tracks)"
      >
        <b-icon icon="play" size="is-large" />
      </div>
    </b-tooltip>
    <b-tooltip
      label="shuffle"
      position="is-left"
      type="is-dark"
      square
    >
      <div
        class="p-1 is-clickable"
        @click="$store.commit('player/shufflePlaylist', tracks)"
      >
        <b-icon icon="shuffle" size="is-large" />
      </div>
    </b-tooltip>
  </div>
</template>
<script>
export default {
  name: 'PlayControls',
  props: {
    tracks: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
