<template>
  <div class="default-layout">
    <div class="Header">
      <b-navbar type="is-primary">
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
    </div>
    <div class="Menu">
      <Sidebar />
    </div>
    <div class="Content">
      <Nuxt />
    </div>
    <div class="Play-Queue" />
    <div class="Player">
      <audio-player />
    </div>
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
        class: []
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

<style scoped>
.default-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 5px;
  grid-auto-flow: row;
  grid-template-areas:
    "Header Header Header"
    "Menu Content Play-Queue"
    "Player Player Player";
}

.Header { grid-area: Header; }

.Menu { grid-area: Menu; }

.Play-Queue { grid-area: Play-Queue; }

.Content { grid-area: Content; overflow-y: auto; }

.Player { grid-area: Player; }
</style>
