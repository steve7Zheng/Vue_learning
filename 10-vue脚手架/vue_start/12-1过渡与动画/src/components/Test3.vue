<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name="animate__animated animate__bounce" -->
    <!-- 找到对应离开出现的动画 enter-active-class="" leave-active-class="" -->
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">吃饭没？</h1>
    </transition-group>
  </div>
</template>

<script>
// npm i animate.css
// 引入一个库
import 'animate.css'
export default {
  name: 'Test3',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1 {
    background-color: orange;
  }
</style>