<template>
  <div class="container">
    <Category title="游戏">
      <!-- 必须用template标签包裹接受插槽传过来的数据 scope=""接收数据 棘手的数据是一个对象 可灵活使用解构赋值 -->
      <template scope="shujv">
        <ul>
          <li v-for="(item, index) in shujv.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 解构赋值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="shujv">
        <h4 v-for="(item, index) in shujv.games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: {
    Category
  }

}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
  }
  h4 {
    text-align: center;
  }
</style>
