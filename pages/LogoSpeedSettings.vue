<template>
  <b-field has-addons label="Logo RPM">
    <p class="control">
      <button
        class="button"
        :class="{'is-text': logoSpeed === ''}"
        @click="$store.commit('settings/setLogoSpeed', '')"
      >
        Disabled
      </button>
    </p>
    <p class="control">
      <button
        class="button"
        :class="{'is-text': logoSpeed === 'thirty-three'}"
        @click="$store.commit('settings/setLogoSpeed', 'thirty-three')"
      >
        33 ⅓
      </button>
    </p>
    <p class="control">
      <button
        class="button"
        :class="{'is-text': logoSpeed === 'fourty-five'}"
        @click="$store.commit('settings/setLogoSpeed', 'fourty-five')"
      >
        45
      </button>
    </p>
    <p class="control">
      <button
        class="button"
        :class="{'is-text': logoSpeed === 'seventy-eight'}"
        @click="$store.commit('settings/setLogoSpeed', 'seventy-eight')"
      >
        78
      </button>
    </p>
  </b-field>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LogoSpeedSettings',
  computed: {
    ...mapGetters('settings', ['logoSpeed'])
  }
}
</script>
