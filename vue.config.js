const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/maps/api': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maps/api': '/maps/api',
        },
      },
    },
  },
})
