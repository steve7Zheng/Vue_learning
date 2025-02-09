<template>
  <ul>
    <!-- 获取得到父组件传过来的路由路径中的参数query -->
    <!-- 方式1 方式2 -->
    <!-- <li>{{ $route.query.id }}</li>
    <li>{{ $route.query.name }}</li> -->

    <!-- 方式3 params接收 -->
    <!-- <li>{{ $route.params.id }}</li>
    <li>{{ $route.params.name }}</li> -->

    <!-- 方式4 props -->
    <li>id:{{ id }}</li>
    <li>name:{{ name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ["id", "name"]
}
</script>

<style>

</style>