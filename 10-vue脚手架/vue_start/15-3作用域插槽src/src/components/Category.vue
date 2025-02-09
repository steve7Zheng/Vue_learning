<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽 （挖个坑，等着组件的使用者进行填充） -->
    <!-- 作用域插槽 把games传给插槽的作用者 -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒','穿越火线','劲舞团','超级玛丽']
    }
  }
}
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    background-color: orange;
    text-align: center;
  }
</style>