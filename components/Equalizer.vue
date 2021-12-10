<template>
  <section>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="title is-size-3">
            {{ bandValues.name }}
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-dropdown aria-role="list" append-to-body>
            <template #trigger>
              <b-button label="Presets" size="is-small" />
            </template>

            <b-dropdown-item v-for="(preset, i) in presets" :key="i" aria-role="listitem" @click="setPreset(preset)">
              {{ preset.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div class="columns">
      <div v-for="(band, i) in bands" :key="band.f" class="column is-flex is-flex-direction-column is-align-items-center">
        <div class="mt-1">
          {{ band.f | freq }}
        </div>
        <div class="my-1 band-wrapper ">
          <equalizer-bar :value="bandValues.values[i]" @change="changeBandVal(i, $event)" />
        </div>
        <div class="mb-1">
          <b-input v-model.number="bandValues.values[i]" size="is-small" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Equalizer',
  props: {},
  computed: {
    ...mapGetters('player', ['bands', 'bandValues', 'presets'])
  },
  methods: {
    ...mapActions('player', ['setFilterGain', 'setPreset']),
    changeBandVal (index, value) {
      this.setFilterGain({ index, value })
    }
  }
}
</script>

<style scoped>
.band-wrapper {
  height: 200px;
}

</style>
