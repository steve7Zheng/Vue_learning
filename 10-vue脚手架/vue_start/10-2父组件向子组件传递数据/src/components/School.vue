<template>
  <div class="school-style">
    <h3>父组件App的参数[teacherName]{{ teacherName }}</h3>
    <h3>父组件App的参数[salary]{{ salary+1000 }}</h3>
    <h3>父组件App的参数[age]{{ age }}</h3>
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="changeSchoolName">改变学校名称</button>
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
  // 接受父组件传递的参数 注册后 props数组里的数据和data里面的用法相同
  props: [
    "teacherName", "salary", "age"
  ],
  methods: {
    changeSchoolName() {
      this.schoolName = "浙江大学软件学院"
    }
  }
}
</script>

<style scoped>
  .school-style {
    background-color: #5bc0de;
  }
</style>