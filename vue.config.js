const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/melp-frontend/' : '/',
  devServer: {
    proxy: {
      '/maps/api': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maps/api': '/maps/api',
        },
        headers: {
          'Access-Control-Allow-Origin': 'https://brayan-web.github.io/melp-frontend/#/',
          
        },
      
      },
        '/data_melp.json': {
          target: process.env.VUE_APP_API_URL,
          changeOrigin: true,
          pathRewrite: { '^/data_melp.json': '' },
          headers: {
            'Access-Control-Allow-Origin': 'https://brayan-web.github.io/melp-frontend/#/',
          
          },
        },
     
      }
  },
})
