<template>
  <div>
    <!-- :salary="" 前面加冒号: 则引号里面的就是表达式 不加的话就表示值为字符串-->
    <School teacherName="王五" :salary="5000" :age="age"></School>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  data() {
    return {
      age: 20
    }
  },
  components: {
    School
  }
}
</script>

<style scoped>

</style>