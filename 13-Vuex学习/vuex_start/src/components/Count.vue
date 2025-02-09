<template>
  <div>
    <!-- 用了mapState和mapGetters引进数据 可以直接写了 不用$store.state.xxx -->
    <h1>当前求和为：{{ sum }}</h1>
    <h1>姓名为：{{ myName }}</h1>
    <h3>当前计算的和：{{ cSum }}</h3>
    <h3>用户组件使用人数为：{{ userList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<script>
  // 要引进 mapState mapGetters
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name:'Count',
    data() {
      return {
        n: 1, //用户选择的数字
      }
    },
    methods: {
      ...mapMutations('CountOp', {increment: 'ADD', decrement: 'SUB'}),
      ...mapActions('CountOp', ['addOdd', 'addWait'])
    },
    computed: {
      // ...mapState(['sum', 'userList']),
      ...mapState('CountOp', ['sum']), // 来自CountOp模块的sum
      ...mapState('UserOp', ['userList']),
      // ...mapState({myName: 'name'}),
      // ...mapGetters(['cSum'])
      ...mapState('CountOp', {myName: 'name'}),
      ...mapGetters('CountOp', ['cSum'])
    }
  }
</script>

<style lang="css">
  button {
    margin-left: 5px;
  }
</style>
