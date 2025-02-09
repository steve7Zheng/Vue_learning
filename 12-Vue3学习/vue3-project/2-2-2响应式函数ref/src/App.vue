<script setup> 
  import {ref} from 'vue'
  // ref函数参数类型允许是对象和简单类型、数组等
  // 1-对象
  const num1 = ref({
    count: 0
  })
  const addNum = () => {
    num1.value.count++ // 中间还有个value 但下面模板中调用没有value
  }
  // 2-简单类型：数字、字符串、布尔
  const num2 = ref(0)
  const addNum2 = () => {
    num2.value++
  }
  // 3-数组类型
  const list = ref([1, 2, 3, 4, 5])
  setTimeout(() => {
    list.value.push(6)
  }, 2000)
</script>

<template>
  <div>
    <button @click="addNum">{{ num1.count }}</button>
    <button @click="addNum2">{{ num2 }}</button>
    {{ list }}
  </div>
</template>

<style scoped>

</style>
