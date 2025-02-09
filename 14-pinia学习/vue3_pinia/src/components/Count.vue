<script setup>
  import {ref} from 'vue'
  import { useCountStore } from '../store/count'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/store/user'
  const n = ref(1)
  const CountStore = useCountStore()
  // state响应式的数据解构
  const {sum, cSum} = storeToRefs(CountStore)
  // 方法 普通解构
  const {add, sub, addOdd, addWait} = CountStore

  const UserStore = useUserStore()
</script>

<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前计算和为：{{ cSum }}</h3>
    <h3>当前人数：{{ UserStore.userList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<style scoped>

</style>