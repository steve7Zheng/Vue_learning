import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    // 让Vue.prototype.$bus可以访问Vue原型上功能属性的
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
