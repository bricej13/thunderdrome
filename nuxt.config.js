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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-title', content: 'Thunderdrome' },
      { name: 'application-name', content: 'Thunderdrome' },
      { name: 'msapplication-TileColor', content: '#fefbe5' },
      { name: 'theme-color', content: '#fefbe5' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
      { rel: 'manifest', href: '/site.webmanifest?v=1' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=1', color: '#81023f' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=1' },
      { rel: 'preload', href: '/Karla-VariableFont_wght.ttf', as: 'font', type: 'font/ttf' }
    ],
    script: [
      { type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
      { nomodule: '', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  plugins: [
    '~/plugins/filters.js',
    '~/plugins/navidrome-auth.js',
    '~/plugins/init.js',
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vue-shortkey.js', ssr: false },
    '~/plugins/api.js',
    '~/plugins/db.js',
    '~/plugins/fanarttv.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: false,
      defaultIconPack: 'ionicons',
      defaultIconComponent: 'Icon',
      customIconPacks: {
        ionicons: {
          sizes: {
            default: 'is-size-5',
            'is-small': '',
            'is-medium': 'is-size-3',
            'is-large': 'is-size-1'
          },
          internalIcons: {
            check: 'checkmark',
            information: 'information',
            'check-circle': 'checkmark-circle-outline',
            alert: 'alert',
            'alert-circle': 'alert',
            'arrow-up': 'arrow-up',
            'chevron-right': 'arrow-forward',
            'chevron-left': 'arrow-back',
            'chevron-down': 'arrow-down',
            eye: 'eye',
            'eye-off': 'eye-off',
            'menu-down': 'arrow-dropdown',
            'menu-up': 'arrow-dropup',
            'close-circle': 'close-circle-outline'
          }
        }
      }
    }]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:4533'
  },
  formulate: {
    configPath: '~/plugins/formulate.config.js'
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
