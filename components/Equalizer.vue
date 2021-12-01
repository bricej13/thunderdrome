<template>
  <div class="columns">
    <div v-for="(band, i) in bands" :key="band.f" class="column is-flex is-flex-direction-column is-align-items-center">
      <div class="mt-1">
        {{ band.f }}
      </div>
      <div class="my-1 band-wrapper ">
        <equalizer-bar :value="band.val" @change="changeBandVal(i, $event)" />
      </div>
      <div class="mb-1">
        <b-input v-model.number="band.val" size="is-small" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Equalizer',
  props: {
    ac: {
      type: AudioContext,
      required: true
    }
  },
  computed: {
    ...mapGetters('player', ['bands'])
  },
  methods: {
    changeBandVal (index, value) {
      this.$emit('filterChange', { index, value })
      this.$store.dispatch('player/setFilterGain', { index, value })
    }
  }
}
</script>

<style scoped>
.band-wrapper {
  height: 200px;
}

</style>
