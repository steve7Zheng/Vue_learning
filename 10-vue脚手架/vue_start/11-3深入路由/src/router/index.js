// 配置路由规则
import VueRouter from 'vue-router'
// 引入组件 
import User from '../pages/User.vue'
import School from '../pages/School.vue'
// 配置路由器
const vueRouter = new VueRouter({
  // 配置每条路由路径 path(资源路径) component(对应哪个组件)
  routes: [
    {
      path: "/user",
      component: User
    },
    {
      path: "/school",
      component: School
    }
  ]
})
export default vueRouter