<template>
  <div>
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>教务信息管理系统</h2></div>
        </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./user.html">用户管理</a> -->
          <!-- 下面这个标签也就相当于a标签 -->
          <!-- to="" 引号里就是路由规则里对应的path -->
          <!-- active-class="active" 表示点击这个标签触发active样式 -->
          <!-- 原始样式也需要加上 -->
          <router-link class="list-group-item" active-class="active" to="/user">用户管理</router-link>
          <router-link class="list-group-item" active-class="active" to="/school">学校管理</router-link>
          <!-- <a class="list-group-item active" href="./school.html">学校管理</a> -->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 变化的地方 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>
</style>