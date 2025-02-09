import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useCountStore = defineStore('count', () => {
  // 数据(state)
  const sum = ref(0)
  // 修改数据的方法 (actions + mutations)
  const add = () => {
    sum.value++
  }
  return {
    sum,
    add
  }
})