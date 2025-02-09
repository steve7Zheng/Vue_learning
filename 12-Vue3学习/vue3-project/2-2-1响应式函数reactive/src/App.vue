<script setup> 
  // export default {
  //   data() {
  //     return {
  //       num: 0
  //     }
  //   },
  //   methods: {
  //     addNum() {
  //       this.num++
  //     }
  //   }
  // }
  // let num = 0
  // const addNum = () => {
  //   num++
  //   console.log(num)  // 这里的num变化了 但是下面模板中num没有响应 该变化
  // }

  // 响应式对象
  import {reactive} from 'vue'
  // 只能接受对象类型
  const state = reactive({
    count: 0
  })
  const addCount = () => {
    state.count++
    console.log(state.count)
  }
</script>

<template>
  <div>
    <!-- <button @click="addNum">{{ num }}</button> -->
    <button @click="addCount">{{ state.count }}</button>
  </div>
</template>

<style scoped>

</style>
