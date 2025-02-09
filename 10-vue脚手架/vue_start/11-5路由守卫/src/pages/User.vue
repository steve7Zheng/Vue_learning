<template>
  <h2>用户信息相关内容</h2>
</template>

<script>
export default {
  name: "User",
  // 组内路由守卫
  beforeRouteEnter(to, from, next) {
    console.log("组内前置路由守卫被触发", to)
    // 如果是要切换到/user
    if(to.path === '/user') {
      // 前置操作
      if(localStorage.getItem("user")==="admin") {
        // 开放下一步
        next()
      } else {
        alert("非admin无权限操作")
      }
    } else {
      // 不是要切换到/user 直接开放下一步
      next()
    }
  }
}
</script>

<style scoped>

</style>