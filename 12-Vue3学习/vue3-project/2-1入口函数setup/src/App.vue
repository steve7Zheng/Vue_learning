<script setup> // setup() 的简略性写法
  // export default {
  //   // beforeCreate() {
  //   //   console.log('beforeCreate')
  //   // },
  //   setup() { // 定义一些变量 函数 可以直接在模板中使用
  //     console.log('setup')
  //     const name = "jack"
  //     const showName = () => {
  //       console.log(name)
  //     }
  //     // 必须return才可以
  //     return {
  //       name,
  //       showName
  //     }
  //   },
  //   beforeCreate() {
  //     console.log('beforeCreate')
  //   }
  // }
  const name = 'jack'
  const showName = () => {
    console.log(name)
  }
</script>

<template>
  <div>
    <button @click="showName">显示姓名</button>
    {{ name }}
  </div>
</template>

<style scoped>

</style>
