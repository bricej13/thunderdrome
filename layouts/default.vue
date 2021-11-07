<template>
  <div class="default-layout is-clipped">
    <div class="header">
      <TopNav />
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
import TopNav from '~/layouts/TopNav'

export default {
  components: { TopNav, Sidebar },
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

.header { grid-area: header; border-bottom: 2px solid black; }

.side-menu { grid-area: side-menu; overflow-y: auto; border-right: 3px solid black; }

.play-queue { grid-area: play-queue; overflow-y: auto; max-width: 20vw; border-left: 3px solid black;}

.page-content { grid-area: page-content; overflow-y: auto; }

.player { grid-area: player; }

</style>
