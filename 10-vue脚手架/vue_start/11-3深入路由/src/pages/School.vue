<template>
  <div>
    <!-- 路由组件一般放在pages文件夹内 -->
    <h2>学校信息相关内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <a class="list-group-item active">学生信息查看</a>
      </li>
      <li>
        <a class="list-group-item">教师信息查看</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "School",
  timer: null,
  mounted() {
    console.log("挂载School组件", this)
    // 整个应用都只有一个router，可以通过组建的$router属性获取得到
    window.userRouter = this.$router
    // this.timer = setInterval(() => {
    //   console.log("hello")
    // }, 1000)
  },
  beforeDestroy() {
    console.log('销毁School组件')
    // clearInterval(this.timer)
  },
  // 组件激活时干的事
  activated() {
    this.timer = setInterval(() => {
      console.log("hello")
    }, 1000)
  },
  // 组件失活时干的事
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>


<style scoped>

</style>