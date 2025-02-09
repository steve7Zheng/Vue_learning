<template>
  <div class="school-style">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="changeSchoolName">改变学校名称</button>
    <br>
    <button @click="sendSchoolName">方式1:prop:向父组件发送学校名称</button>
    <br>
    <button @click="sendAddress">方式2 方法3:$emit:向父组件发送学校地址</button>
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
  // 方式1 接受父组件传过来的函数 后续利用这个函数向父组件传递数据
  props: [
    "funGetSchoolName"
  ],
  methods: {
    changeSchoolName() {
      this.schoolName = "浙江大学软件学院"
    },
    // 方法1 父组件向子组件传递函数  子组件在函数中调用其传过来的函数 并要传的数据作为其参数
    sendSchoolName() {
      this.funGetSchoolName(this.schoolName)
    },
    sendAddress() {
      // 方法2 方法3 为父组件的事件函数传递数据 可以传递多个
      this.$emit("funGetAddress", this.address)
    }
  }
}
</script>

<style scoped>
  .school-style {
    background-color: #5bc0de;
    margin: 20px;
  }
</style>