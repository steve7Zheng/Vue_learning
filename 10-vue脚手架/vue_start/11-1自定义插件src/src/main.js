import Vue from 'vue'
import App from './App.vue'
import myPlugin from './myPlugin'
Vue.config.productionTip = false
// 使用插件
Vue.use(myPlugin)
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
