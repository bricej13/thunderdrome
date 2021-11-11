<template>
  <b-navbar type="is-transparent" :mobile-burger="false">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span class="is-size-4 title is-uppercase">Thunderdrome</span>
      </b-navbar-item>
      <b-navbar-item tag="div" class="is-flex-grow-1 is-hidden-mobile">
        <universal-search />
      </b-navbar-item>
      <a role="button" aria-label="menu" class="navbar-burger burger" :class="{'is-active': $store.getters.menuOpen}" @click="$store.dispatch('toggleMenu')"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></a>
      <b-sidebar
        class="is-hidden-tablet"
        :open="$store.getters.menuOpen"
        :fullheight="true"
        @close="$store.commit('setMenuOpen', false)"
      >
        <side-menu @click.native="$store.commit('setMenuOpen', false)" />
      </b-sidebar>
      <b-sidebar
        class="is-hidden-tablet"
        :open="$store.getters.queueOpen"
        :fullheight="true"
        right
        @close="$store.commit('setQueueOpen', false)"
      >
        <play-queue />
      </b-sidebar>
    </template>

    <template #end class="is-flex-grow-1">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="is-primary" @click.prevent="logout">
            <strong>Log out {{ $store.state.user.name }}</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'TopNav',
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      await this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar-menu .navbar-brand {
  flex-grow: 1;
}
</style>
