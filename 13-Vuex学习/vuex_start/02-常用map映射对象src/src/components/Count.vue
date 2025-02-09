<template>
  <div>
    <!-- 用了mapState和mapGetters引进数据 可以直接写了 不用$store.state.xxx -->
    <h1>当前求和为：{{ sum }}</h1>
    <h1>姓名为：{{ myName }}</h1>
    <h3>当前计算的和：{{ cSum }}</h3>
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
        // sum: 0 //当前的和
      }
    },
    methods: {
      // increment() {
      //   // this.sum += this.n
      //   // 通过store对象触发action里的add方法
      //   // this.$store.dispatch('add', this.n)
      //   // 不需要在actions中做任何业务处理仅仅时获得数据的作用 
      //   // 可以直接调用commit 把对应值传过去即可
      //   this.$store.commit('ADD', this.n)
      // },
      // decrement() {
      //   // this.sum -= this.n
      //   // this.$store.dispatch('sub', this.n)
      //   this.$store.commit('SUB', this.n)
      // },
      // 简写成以下： 传值在上面进行
      ...mapMutations({increment: 'ADD', decrement: 'SUB'}),
      // incrementOdd() {
      //   // if(this.$store.state.sum % 2) {
      //   //   this.$store.dispatch('add', this.n)
      //   // }
      //   // 把业务逻辑迁移到store的actions中
      //   this.$store.dispatch('addOdd', this.n)
      // },
      // incrementWait() {
      //   // setTimeout(() => {
      //   //   this.$store.dispatch('add', this.n)
      //   // }, 500)
      //   this.$store.dispatch('addWait', this.n)
      // },
      // 简写成 直接将函数名同名也可 传值在上面传
      ...mapActions(['addOdd', 'addWait'])
    },
    computed: {
      // cSum() {
      //   return this.$store.state.sum
      // },
      // name() {
      //   return this.$store.state.name
      // },
      // 上面的操作可以简写为以下：就是将state中得值直接引进来 不用再$store.state.xxx这么麻烦
      ...mapState(['sum']),
      // 改个名
      ...mapState({myName: 'name'}),
      // getters中的数据也可以直接引进来
      ...mapGetters(['cSum'])
    }
  }
</script>

<style lang="css">
  button {
    margin-left: 5px;
  }
</style>
