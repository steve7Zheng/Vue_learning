<template>
  <div>
    <ul>
      <li v-for="item in studentList" :key="item.id" >
        <!-- <router-link :to="`/school/student/detail?id=${item.id}&name=${item.name}`"> -->
        <!-- 另一种写法 -->
        <router-link :to="{
          // 方式1 query对象方式
          // path: '/school/student/detail',
          // query: {
          //   id: item.id,
          //   name: item.name
          // }

          // 方式2 路由命名方式 query对象传递
          // name: 'stu_info',
          // query: {
          //   id: item.id,
          //   name: item.name
          // }

          // 方式3 方式4-1 路由命名方式 params对象传递
          // name: 'stu_info',
          // params: {
          //   id: item.id,
          //   name: item.name
          // }

          // 方式4-2 路由命名方式-query-props
          name: 'stu_info',
          query: {
            id: item.id,
            name: item.name
          }
        }">
          {{ item.id }}-{{ item.name }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentList: [
        {id: "001", name: "张三"},
        {id: "002", name: "李四"}
      ]
    }
  }
}
</script>
<style scoped>

</style>