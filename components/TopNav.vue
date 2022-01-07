<template>
  <div class="is-relative">
    <viz v-if="$store.getters['settings/showViz']" class="" style="position: absolute;" />
    <b-navbar type="is-transparent" style="background-color: transparent" :mobile-burger="false">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="/logo.svg" class="mr-2" :class="logoClasses"><span
            class="is-size-4 title is-uppercase"
          >Thunderdrome</span>
        </b-navbar-item>
        <b-navbar-item tag="div" class="is-flex-grow-1 is-hidden-mobile">
          <universal-search />
        </b-navbar-item>
        <a
          role="button"
          aria-label="menu"
          class="navbar-burger burger"
          :class="{'is-active': $store.getters.menuOpen}"
          @click="$store.dispatch('toggleMenu')"
        ><span aria-hidden="true" /><span aria-hidden="true" /><span
          aria-hidden="true"
        /></a>
        <b-sidebar
          class="is-hidden-tablet"
          :open="$store.getters.menuOpen"
          overlay
          :fullheight="true"
          @close="$store.commit('setMenuOpen', false)"
        >
          <side-menu @click.native="$store.commit('setMenuOpen', false)" />
        </b-sidebar>
        <b-sidebar
          :open="$store.getters.queueOpen"
          :fullheight="true"
          overlay
          right
          @close="$store.commit('setQueueOpen', false)"
        >
          <play-queue />
        </b-sidebar>
      </template>

      <template #end class="is-flex-grow-1">
        <b-navbar-item tag="div" />
        <b-navbar-item tag="div">
          <div class="buttons">
            <nuxt-link :to="{name: 'settings'}" class="p-2">
              <ion-icon name="settings-outline" />
            </nuxt-link>
            <a class="is-primary" @click.prevent="logout">
              <strong>Log out {{ $store.state.user.name }}</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TopNav',
  computed: {
    logoClasses () {
      return (this.playing ? 'spin ' : '') + this.$store.state.settings.logoSpeed
    },
    ...mapGetters('player', ['playing'])
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      await this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar .navbar-brand {
  flex-grow: 1;
}

.spin {
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.spin.seventy-eight {
  animation-duration: 769ms;
}

.spin.fourty-five {
  animation-duration: 1333ms;
}

.spin.thirty-three {
  animation-duration: 1818ms;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
