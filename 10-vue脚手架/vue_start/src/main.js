import Vue from 'vue'
import App from './App.vue'
// npm i element-ui
// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// 应用ElementUI
// Vue.use(ElementUI)

// 按需引入
import {Button, Row, DatePicker} from 'element-ui'
Vue.component('el-button',Button)
Vue.component('el-row', Row)
Vue.component('el-date-picker', DatePicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
