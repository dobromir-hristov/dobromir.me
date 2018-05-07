module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dobromir Hristov - JavaScript Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dobromir Hristov\'s personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800' }
    ],
    bodyAttrs: {
      class: 'font-sans text-blue-dark'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
  ]
}
