// 步骤1 npm i vuex@3
// vue2 使用3版本 vue3使用最新版本
// 步骤2 创建store对象并导出挂载
// 创建store对象前先使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
import CountOp from './count'
import UserOp from './User'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CountOp,
    UserOp
  }
})
