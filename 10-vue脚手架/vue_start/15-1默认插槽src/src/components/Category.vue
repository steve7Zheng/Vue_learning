<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽 （挖个坑，等着组件的使用者进行填充） -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['listData', 'title']
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