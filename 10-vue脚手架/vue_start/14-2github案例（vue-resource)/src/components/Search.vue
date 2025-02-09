<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      console.log(this)
      // 请求前更新List的数据
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('请求成功了', response.data.items)
          // this.$bus.$emit('getUsers', response.data.items)
          this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
        }, err => {
          console.log('请求失败了', err.message)
          this.$bus.$emit('updateListData', {isLoading: false, errMsg: err.Message, users: []})
        }
      )
    }
  }
}
</script>

<style>

</style>