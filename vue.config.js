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
        '/data_melp.json': {
          target: 'https://recruiting-datasets.s3.us-east-2.amazonaws.com',
          changeOrigin: true,
          pathRewrite: { '^/data_melp.json': '' },
        },
    
      // 'https://recruiting-datasets.s3.us-east-2.amazonaws.com'

      }
  },
})
