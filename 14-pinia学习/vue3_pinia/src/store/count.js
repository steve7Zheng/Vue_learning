import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
// defineStore
export const useCountStore = defineStore('count', () => {
  // 数据(state)
  const sum = ref(0)
  // 模拟vuex中的getters 直接用vue3中的computed
  const cSum = computed(() => {
    return sum.value*10
  })
  // 修改数据的方法 (actions + mutations)
  const add = (n) => {
    sum.value += n
  }
  const sub = (n) => {
    sum.value -= n
  }
  const addOdd = (n) => {
    if(sum.value % 2) {
      sum.value += n
    }
  }
  const addWait = (n) => {
    setTimeout(() => {
      sum.value += n
    }, 500)
  }
  // 记得导出
  return {
    sum,
    cSum,
    add,
    sub,
    addOdd,
    addWait
  }
})