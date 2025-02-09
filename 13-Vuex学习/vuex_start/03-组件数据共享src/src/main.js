import Vue from 'vue'
import App from './App.vue'
// @ 表示src下的文件 也可以用传统的路径写法
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
