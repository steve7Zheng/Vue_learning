const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器 只能配置一个
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启服务代理器（方式2）
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: {'^/api':''},
  //       // 下面那两个不写 在Vue脚手架中 也默认为true
  //       ws: true, // 用于支持websocket
  //       changeOrigin: true // 说谎 说自己也是5000 即用于控制请求中的host值
  //     },
  //     '/demo': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {'^/demo':''}
  //     }
  //   }
  // }
})
