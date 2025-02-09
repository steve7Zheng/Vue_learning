<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition包裹需要有动画的元素 -->
    <!-- appear 让一上来就有出现的动画 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test2',
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
    /* 动画效果 */
    /* transition: .5s linear; */
  }
  /* 进入的起点 离开的终点*/
  .hello-enter,
  .hello-leave-to {
    transform: translateX(-100%);
  }
  /* 进入的终点 离开的起点*/
  .hello-enter-to,
  .hello-leave {
    transform: translateX(0px);
  }
  /* 动画效果 */
  .hello-enter-active,
  .hello-leave-active {
    transition: .5s linear;
  }
  /* 离开的起点 */
  /* .hello-leave {
    transform: translateX(0px);
  } */
  /* 离开的终点 */
  /* .hello-leave-to {
    transform: translateX(-100%);
  } */
  
</style>