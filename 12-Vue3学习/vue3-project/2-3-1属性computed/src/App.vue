<script setup>
  // export default {
  //   data() {
  //     return {
  //       totalPrice: 2000,
  //       amount: 10,
  //       discount: 8
  //     }
  //   },
  //   computed: {
  //     avgPrice() {
  //       return (this.totalPrice / this.amount) * (this.discount / 10);
  //     }
  //     /*avgPrice:{
  //       get(){
  //         console.log('调用计算属性avgPrice中Get函数')
  //         return (this.totalPrice/this.amount)*(this.discount/10);
  //       },
  //       set(value){
  //         console.log('调用计算属性avgPrice中Set函数')
  //       }
  //     }*/
  //   }
  // }
  import {computed, ref} from 'vue'
  const data = ref({
    totalPrice: 10,
    amount: 10,
    discount: 8
  })
  // 只有get 对应vue2的简写版本
  // const avgPrice = computed(() => {
  //   return (data.value.totalPrice/data.value.amount)*(data.value.discount/10)
  // })
  // 有get有set
  const avgPrice = computed({
    get() {
      console.log('调用计算属性avgPrice中Get函数')
      return (data.value.totalPrice/data.value.amount)*(data.value.discount/10)
    },
    set(value) {
      console.log('调用计算属性avgPrice中Set函数')
    }
  })
</script>

<template>
  <div>
    总价：<input type="text" v-model="data.totalPrice"> <br/>
    数量：<input type="text" v-model="data.amount"> <br/>
    折扣：<input type="text" v-model="data.discount">折<br/>
    折扣平均单价：<input type="text" v-model="avgPrice">元<br/>
  </div>
</template>

<style scoped>

</style>
