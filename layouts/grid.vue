<template>
  <div class="default-layout is-clipped">
    <div class="header">
      <TopNav />
    </div>
    <div class="side-menu" :style="{width: $store.getters.menuOpen ? 'auto' : '0'}">
      <SideMenu />
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
import SideMenu from '~/components/SideMenu'
import TopNav from '~/components/TopNav'

export default {
  components: { TopNav, SideMenu },
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
  }
}
</script>

<style scoped>
.default-layout {
  height: 100vh;
  width: 100vw;
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
.default-layout.mobile {
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto ;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    "header"
    "page-content"
    "player";
}

.header { grid-area: header; border-bottom: 2px solid black; }

.side-menu { grid-area: side-menu; overflow-y: auto; border-right: inset 3px black; position: relative; }

.play-queue { grid-area: play-queue; overflow-y: auto; max-width: 20vw; border-left: 3px solid black;}

.page-content { grid-area: page-content; overflow-y: auto; }

.player { grid-area: player; }

</style>
