<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="user.name">
    <input type="text" placeholder="请输入年龄" v-model="user.age">
    <button @click="ADD_USER(user)">添加用户</button>
    <button @click="addUserByServer">从服务器中直接生成用户名</button>
    <ul>
      <li v-for="user in userList" :key="user.id">
      {{ user.name }}-{{ user.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
  export default {
    name: 'User',
    data() {
      return {
        user: {
          name: '',
          age: ''
        }
      }
    },
    methods: {
      ...mapMutations('UserOp', ['ADD_USER']),
      ...mapActions('UserOp', ['addUserByServer'])
    },
    computed: {
      // 组件数据共享
      // ...mapState(['userList', 'sum'])
      ...mapState('CountOp', ['sum']), // 来自CountOp模块的sum
      ...mapState('UserOp', ['userList']),
    }
    
  } 
</script>

<style>

</style>