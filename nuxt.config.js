global.File= typeof window === 'undefined' ? Object : window.File
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  //mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl: "https://api.klinikdiyetisyen.com/api/",
    //apiBaseUrl: "http://192.168.1.45/dietician/api/",
    apiPublicUrl:"https://api.klinikdiyetisyen.com/"
    //apiPublicUrl:"http://192.168.1.45/dietician/"
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    htmlAttrs: {
      lang: 'tr'
    },
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ["~/plugins/vee-validate","~/plugins/vuetify","~/plugins/axios",{src: '~/plugins/owl', ssr: false}],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-izitoast',
    'dropzone-nuxt',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS:true,
    transpile: ["vee-validate/dist/rules","vee-validate/dist/locale"],
    splitChunks: {
      layouts: true
    }
  },
  hooks: {
    'vue-renderer:ssr:context'(context) {
      const routePath = JSON.stringify(context.nuxt.routePath);
      context.nuxt = {serverRendered: true, routePath};
    }
  },
}
