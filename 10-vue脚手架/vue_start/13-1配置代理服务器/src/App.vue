<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
// npm i axios
// 引入axios
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8081/api/students').then(
        response => {
          console.log('请求成功了', response.data)
        }, err => {
          console.log('请求失败了', err.message)
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8081/demo/cars').then(
        response => {
          console.log('请求成功了', response.data)
        }, err => {
          console.log('请求失败了', err.message)
        }
      )
    }
  }
}
</script>

<style>

</style>