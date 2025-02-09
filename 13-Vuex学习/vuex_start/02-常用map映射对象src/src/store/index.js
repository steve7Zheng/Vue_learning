// 步骤1 npm i vuex@3
// vue2 使用3版本 vue3使用最新版本
// 步骤2 创建store对象并导出挂载
// 创建store对象前先使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions 用于相应组件中的动作（获取后端API数据或者进行业务逻辑处理）
// 类似后端-service （获取需要的数据 即state中数据变化需要依赖的数据）
const actions = {
  // 这里面没有业务逻辑 可以直接在组件中通过store对象中的commit将值传给mutations
  // add(context, value) {
  //   console.log(context, value)
  //   console.log('actions中的add被调用了')
  //   // context的commit方法触发mutations
  //   context.commit("ADD", value)
  // },
  // sub(context, value) {
  //   console.log(context, value)
  //   console.log('actions中的sub被调用了')
  //   // context的commit方法触发mutations
  //   context.commit("SUB", value)
  // },
  addOdd(context, value) {
    if(context.state.sum % 2) {
      context.commit("ADD", value)
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value)
    }, 500)
  }
}
// getters是一个对象 computed中的计算可以迁移到这里
const getters = {
  cSum() {
    return state.sum*10
  }
}
// 准备mutations 用于操作数据(增删改查)
// 类似后端dao （中间站 上面传下来的数据和下面要变化的数据都拿到 进行对应的变化）
const mutations = {
  // 这里的state就是下面的state value时actions传下来的value
  ADD(state, value) {
    console.log('mutations中的ADD被调用了')
    state.sum += value
  },
  SUB(state, value) {
    console.log('mutations中的SUB被调用了')
    state.sum -= value
  }
}
// 准备state 用于存储对象(存要变化的数据)
// 类似后端 domain
const state = {
  sum: 0,
  name: 'jack'
}
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
