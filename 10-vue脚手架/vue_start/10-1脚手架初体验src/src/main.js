import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 要用完整版vue 才可以像下面这样写App组件 官方的是“精简版”
// import Vue from 'vue/dist/vue'
// new Vue({
//   el: '#app',
//   template: `<App></App>`,
//   components: {
//     App
//   }
// })
new Vue({
  // render(createElement) {
  //   return createElement(App)
  // }
  // render: createElement => createElement(App)
  render: h => h(App),
}).$mount('#app')
