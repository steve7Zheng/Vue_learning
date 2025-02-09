<script setup>
  import {ref} from 'vue'
  import { useUserStore } from '../store/user'
  import { storeToRefs } from 'pinia'
  import { useCountStore } from '@/store/count'
  const UserStore = useUserStore()
  const user = ref({
    name: '',
    age: ''
  })
  const CountStore = useCountStore()
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ CountStore.sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="user.name">
    <input type="text" placeholder="请输入年龄" v-model="user.age">
    <button @click="UserStore.add_user(user)">添加用户</button>
    <button @click="UserStore.addUserByServer">从服务器中直接生成用户名</button>
    <ul>
      <li v-for="user in UserStore.userList" :key="user.id">
      {{ user.name }}-{{ user.age }}
      </li>
    </ul>
  </div>
</template>

<style>

</style>