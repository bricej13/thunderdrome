<template>
  <div class="level">
    <b-tooltip
      label="play"
      position="is-left"
      type="is-dark"
      square
    >
      <a
        class="p-1 is-clickable"
        @click="startPlaylist(tracks)"
      >
        <ion-icon name="play" size="large" />
      </a>
    </b-tooltip>
    <b-tooltip
      label="shuffle"
      position="is-left"
      type="is-dark"
      square
    >
      <a
        class="p-1 is-clickable"
        @click="shufflePlaylist(tracks)"
      >
        <ion-icon name="shuffle-outline" size="large" />
      </a>
    </b-tooltip>
    <b-tooltip
      label="append to queue"
      position="is-left"
      type="is-dark"
      square
    >
      <a
        class="p-1 is-clickable"
        @click="appendToPlaylist(tracks)"
      >
        <ion-icon name="add" size="large" />
      </a>
    </b-tooltip>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions('player', [
      'shufflePlaylist', 'startPlaylist', 'appendToPlaylist'
    ])
  }
}
</script>
