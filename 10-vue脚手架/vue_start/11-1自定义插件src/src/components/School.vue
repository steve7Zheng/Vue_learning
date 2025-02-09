<template>
  <div class="school-style">
    <!-- 使用插件中安装的全局过滤器 -->
    <h2>学校名称：{{ schoolName | mySlice}}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="testHello">测试插件hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      schoolName: "浙江大学",
      address: "杭州紫金港"
    }
  },
  methods: {
    testHello() {
      // 使用插件上的定义在Vue原型上的函数
      this.hello()
    }
  }
}
</script>

<style scoped>
  .school-style {
    background-color: #5bc0de;
  }
</style>