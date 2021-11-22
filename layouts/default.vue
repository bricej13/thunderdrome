<template>
  <div class="default-layout is-clipped">
    <div class="header">
      <TopNav />
    </div>
    <div class="body-content columns is-gapless is-mobile mb-0 is-clipped">
      <div class="side-menu column is-3-tablet is-2-desktop is-hidden-mobile">
        <SideMenu />
      </div>
      <div class="page-content column">
        <Nuxt />
      </div>
      <div v-if="hasQueue" class="play-queue column is-3-desktop is-hidden-touch">
        <play-queue />
      </div>
    </div>
    <div class="player">
      <audio-player />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideMenu from '~/components/SideMenu'
import TopNav from '~/components/TopNav'

export default {
  name: 'DefaultLayout',
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
  computed: {
    ...mapGetters('player', ['hasQueue'])
  },
  mounted () {
    this.$store.dispatch('startEventStream')
  }
}
</script>

<style scoped>
.default-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    "header"
    "body-content"
    "player";
}

.header { grid-area: header; border-bottom: 2px solid black; }

.side-menu { grid-area: side-menu; overflow-y: auto; border-right: 3px solid black; position: relative; }

.play-queue { grid-area: play-queue; overflow-y: auto; max-width: 20vw; border-left: 3px solid black;}

.page-content { grid-area: page-content; overflow-y: auto; }

.player { grid-area: player; }

</style>
