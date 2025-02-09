// 插件
export default {
  // "为Vue安装一些玩意儿"
  install(Vue) {
    console.log('创建自定义插件')
    console.log(Vue)
    // 全局过滤器
    Vue.filter("mySlice", function(value) {
      return value.slice(0, 2)
    })
    // 给Vue原型上加上一个方法（vm和vc都能用）
    Vue.prototype.hello = () => alert("hello")
  }
}