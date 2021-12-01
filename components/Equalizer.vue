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
export default {
  name: 'Equalizer',
  props: {
    ac: {
      type: AudioContext,
      required: true
    }
  },
  data () {
    return {
      bands: [
        { f: 32, val: 0.5, type: 'lowshelf' },
        { f: 64, val: 0.5, type: 'peaking' },
        { f: 125, val: 0.5, type: 'peaking' },
        { f: 250, val: 0.5, type: 'peaking' },
        { f: 500, val: 0.5, type: 'peaking' },
        { f: 1000, val: 0.5, type: 'peaking' },
        { f: 2000, val: 0.5, type: 'peaking' },
        { f: 4000, val: 0.5, type: 'peaking' },
        { f: 8000, val: 0.5, type: 'peaking' },
        { f: 16000, val: 0.5, type: 'highshelf' }
      ]
    }
  },
  watch: {
    bands (bands) {
      const filters = this.bands.map(function (band) {
        const filter = this.ac.createBiquadFilter()
        filter.type = band.type
        filter.gain.value = band.val
        filter.Q.value = 1
        filter.frequency.value = band.f
        return filter
      }.bind(this))
      this.$emit('filters', filters)
    }
  },
  methods: {
    changeBandVal (i, v) {
      this.$set(this.bands, i, { ...this.bands[i], val: v })
    }
  }
}
</script>

<style scoped>
.band-wrapper {
  height: 100px;
}

</style>
