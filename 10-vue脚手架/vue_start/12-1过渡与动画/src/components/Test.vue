<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- transition包裹需要有动画的元素 -->
    <!-- appear 让一上来就有出现的动画 -->
    <!-- transition-group 包裹着多个动画 -->
    <transition-group name="hello" appear>
      <!-- 多个动画 每个元素要有key值 -->
      <!-- 有时候也可以这样 -->
      <!-- <div v-show="isShow">
        <h1>你好啊！</h1>
        <h1>吃饭没？</h1>
      </div> -->
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">吃饭没？</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test',
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
  /* 不起名的动画 */
  /* .v-enter-active {
    animation: test .5s linear;
  }
  .v-leave-active {
    animation: test .5s linear reverse;
  } */
  /* 起了名的动画 方便区分不同的动画 */
  .hello-enter-active {
    animation: test .5s linear;
  }
  .hello-leave-active {
    animation: test .5s linear reverse;
  }
  /* 动画 */
  @keyframes test {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>