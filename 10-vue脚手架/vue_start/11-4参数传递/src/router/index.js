// 配置路由规则
import VueRouter from 'vue-router'
// 引入组件 
import User from '../pages/User.vue'
import School from '../pages/School.vue'
// 引入组件的子组件
import Student from '../pages/Student.vue'
import Teacher from '../pages/Teacher.vue'
import Detail from '../pages/Detail.vue'

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
      component: School,
      // 这个路由下的子路由 即为这个组件下的子组件
      children: [
        {
          // 子组件的路径不要带 / 
          path: 'student',
          component: Student,
          children: [
            {
              // 方式1-query
              // path: 'detail',

              // 方式2-路由命名-query
              // name: 'stu_info',
              // path: 'detail',

              // 方式3-路由命名(必须)-params
              // name: 'stu_info',
              // path: 'detail/:id/:name',

              // 方式4-1 路由命名(必须)-params(必须)-props
              // name: 'stu_info',
              // path: 'detail/:id/:name',
              // props: true,

              // 方式4-2 路由命名(必须)-query-props
              name: 'stu_info',
              path: 'detail',
              props($route) {
                return {
                  id: $route.query.id,
                  name: $route.query.name
                }
              },
              component: Detail
            }
          ]
        },
        {
          path: 'teacher',
          component: Teacher
        }
      ]
    }
  ]
})
export default vueRouter