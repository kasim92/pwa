const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'https://peaceful-bhabha-90ff47.netlify.app/',
    themeColor: '#2d3748',
    msTileColor: '#2d3748',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestPath: 'manifest.json',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.join('public', 'service-worker.js')
    }
  },
  // productionSourceMap: process.env.NODE_ENV != 'production',
  // parallel: false,
  // configureWebpack: {
  //   resolve: {
  //     extensions: ['.js', '.vue', '.json'],
  //     alias: {
  //       '@': path.resolve('src'),
  //     }
  //   }
  // }
}