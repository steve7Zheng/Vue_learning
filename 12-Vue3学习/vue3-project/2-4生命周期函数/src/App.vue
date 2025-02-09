<script setup>
  // export default {
  //   beforeMount() {
  //     console.log("执行1-beforeMount生命周期函数")
  //   },
  //   mounted() {
  //     console.log("执行2-mounted生命周期函数")
  //   },
  //   //vue3中已取消beforeDestroy，用
  //   // beforeDestroy() {
  //   //   console.log("执行3-beforeDestroy生命周期函数")
  //   // }
  //   beforeUnmount() {
  //     console.log("执行3-beforeUnmount生命周期函数")
  //   }
  // }
  import {onBeforeMount, onMounted} from 'vue'
  onBeforeMount(() => {
    console.log("执行1-beforeMount生命周期函数")
  })
  onMounted(() => {
    console.log("执行2-mounted生命周期函数-1")
  })
  onMounted(() => {
    console.log("执行2-mounted生命周期函数-2")
  })
</script>

<template>
</template>

<style scoped>

</style>
