<template>
  <div class="default-layout is-clipped">
    <div class="header">
      <b-navbar type="is-transparent">
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <span class="is-size-4 title is-uppercase">Thunderdrome</span>
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="is-primary" @click.prevent="logout">
                <strong>Log out {{ $store.state.user.name }}</strong>
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <div class="side-menu">
      <Sidebar />
    </div>
    <div class="page-content">
      <Nuxt />
    </div>
    <div class="play-queue">
      <play-queue />
    </div>
    <div class="player">
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
  grid-template-columns: 1fr 4fr auto;
  grid-template-rows: auto 1fr auto;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    "header header header"
    "side-menu page-content play-queue"
    "player player player";
}

.header { grid-area: header; }

.side-menu { grid-area: side-menu; overflow-y: auto; border-right: 3px solid black; }

.play-queue { grid-area: play-queue; overflow-y: auto; max-width: 20vw; border-left: 3px solid black;}

.page-content { grid-area: page-content; overflow-y: auto; }

.player { grid-area: player; }

</style>
