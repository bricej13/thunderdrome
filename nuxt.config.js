export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  generate: {
    fallback: true
  },
  vue: {
    config: {
      ignoredElements: [/^ion-/]
    }
  },
  head: {
    title: 'Thunderdrome',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/Karla-VariableFont_wght.ttf', as: 'font', type: 'font/ttf' }
    ],
    script: [
      { type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
      { nomodule: '', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/navidrome-auth.js',
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vue-shortkey.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-buefy', { css: false, materialDesignIcons: false, defaultIconPack: 'fas', defaultIconComponent: 'FontAwesomeIcon' }]
  ],
  fontawesome: {
    icons: {
      // solid: true, // include the full pack in the bundle, not recommended
      solid: ['faPlay', 'faRecordVinyl', 'faPause', 'faTrashAlt', 'faStepForward', 'faStepBackward', 'faMusic', 'faMicrophoneAlt',
        'faPlus', 'faRandom', 'faStream', 'faArrowUp', 'faArrowDown', 'faArrowLeft', 'faArrowRight', 'faAngleRight', 'faAngleLeft',
        'faStar', 'faHeart', 'faHistory', 'faPlayCircle', 'faInfinity', 'faBars'],
      regular: ['faHeart']
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:4533'
  },
  router: {
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true
  }
}
