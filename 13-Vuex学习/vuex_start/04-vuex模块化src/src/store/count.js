export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    ADD(state, value) {
      console.log('mutations中的ADD被调用了')
      state.sum += value
    },
    SUB(state, value) {
      console.log('mutations中的SUB被调用了')
      state.sum -= value
    }
  },
  getters: {
    cSum(state) {
      return state.sum*10
    }
  },
  state: {
    sum: 0,
    name: 'jack'
  },
}