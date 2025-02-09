<template>
  <div class="app-style">
    <!-- 方法1props -->
    <!-- <h3>方法1props: 学校名称：{{ schoolName }}</h3> -->
    <!-- 先将函数传过去 -->
    <!-- <School :funGetSchoolName="getSchoolName"></School> -->
    <!-- 方法2 $emit -->
    <h3>方法2 方法3 $emit: 学校地址： {{ address }}</h3>
    <!-- <School @funGetAddress="getAddress"></School> -->
    <!-- 方法3 $on挂载事件 $emit调用 -->
    <!-- ref="" 相当于起别名 -->
    <School ref="student"></School>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  data() {
    return {
      age: 20,
      schoolName: '',
      address: ''
    }
  },
  components: {
    School
  },
  methods: {
    getSchoolName(schoolName) {
      console.log("函数被触发了" + schoolName)
      this.schoolName = schoolName
    },
    getAddress(address) {
      this.address = address
    }
  },
  mounted() {
    // 方法3 为组件挂载事件funGetAddress 第二个参数是这个事件对应的方法
    this.$refs.student.$on("funGetAddress", this.getAddress)
  }
}
</script>

<style scoped>
  .app-style {
    background-color: pink;
  }
</style>