<script setup>
  import {useCountStore} from './store/count'
  const countStore = useCountStore()

</script>

<template>
  <button @click="countStore.add()">{{ countStore.sum }}</button>
</template>

<style>

</style>
