import Vue from 'vue'
import App from './App.vue'
// npm i vue-router@3
// 引入路由插件
import VueRouter from 'vue-router'
// 引入自己设置的路由规则
import router from './router'
Vue.config.productionTip = false
// 使用路由插件
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  // 自己配置的路由规则
  // 使用了路由插件VueRouter 所以就有了router这个属性
  router
}).$mount('#app')
