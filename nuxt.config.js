module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dobromir Hristov - Front-end Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dobromir Hristov\'s personal website' },
      { name: 'msapplication-TileColor', content: '#ff0000' },
      { name: 'msapplication-config', content: '/fav/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/fav/favicon-16x16.png' },
      { rel: 'manifest', href: '/fav/site.webmanifest' },
      { rel: 'mask-icon', href: '/fav/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/fav/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800' }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=default,IntersectionObserver,Array.prototype.find' }
    ],
    bodyAttrs: {
      class: 'font-raleway text-blue-dark'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#44567b' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    '@/assets/app.scss'
  ],

  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-29425482-10'
    }]
  ],
  plugins: [
    { src: '~/plugins/vue-observer', ssr: false }
  ]
}
