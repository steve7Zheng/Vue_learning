<template>
  <div>
    <!-- 路由组件一般放在pages文件夹内 -->
    <h2>学校信息相关内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item active">学生信息查看</a> -->
        <!-- 导航区 -->
        <router-link replace class="list-group-item" active-class="active" to="/school/student">学生信息查看</router-link>
      </li>
      <li>
        <!-- <a class="list-group-item">教师信息查看</a> -->
        <!-- 导航区 这里要加 / -->
        <router-link replace class="list-group-item" active-class="active" to="/school/teacher">教师信息查看</router-link>
      </li>
    </ul>
    <!-- 展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "School"
}
</script>


<style scoped>

</style>