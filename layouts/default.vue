<template>
  <div>
    <b-navbar type="is-primary is-fixed-top">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="is-size-4 has-text-weight-bold">Thunderdrome</span>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" @click.prevent="logout">
              <strong>Log out {{ $store.state.user.name }}</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="columns">
      <div class="column is-2">
        <Sidebar />
      </div>
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
    <nav class="navbar is-fixed-bottom is-transparent">
      <audio-player />
      <audio :src="$store.state.player.playlist[0]" />
    </nav>
  </div>
</template>

<script>
import Sidebar from '~/layouts/Sidebar'

export default {
  components: { Sidebar },
  data () {
    return {
    }
  },
  head () {
    return {
      htmlAttrs: {
        class: ['has-navbar-fixed-top', 'has-navbar-fixed-bottom']
      }
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      await this.$router.push('/login')
    }
  }
}
</script>
