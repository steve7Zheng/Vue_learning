<script setup>
  // export default {
  //   data(){
  //     return{
  //       happy: true,
  //       name: "jack",
  //       numbers: {
  //         x: 1,
  //         y: 1
  //       }
  //     }
  //   },
  //   methods: {
  //     changeMood() {
  //       this.happy = !this.happy;
  //     }
  //   },
  //   computed: {
  //     mood() {
  //       return this.happy ? "高兴" : "难过";
  //     }
  //   },
  //   watch:{
  //     /*happy:{
  //       immediate:true,
  //       handler(newValue,oldValue){
  //         console.log('happy属性被修改了',newValue,oldValue)
  //       }
  //     }*/
  //     happy(value){
  //       console.log('happy属性被修改了',value)
  //     },
  //     numbers: {
  //       deep:true,
  //       handler(value) {
  //         console.log('numbers.x属性被修改了', value.x);
  //       }
  //     }
  //   }
  // }
  import {watch, computed, ref} from 'vue'
  const data = ref({
    happy: true,
    name: 'jack',
  })
  // 计算属性
  const mood = computed(() => {
    return data.value.happy ? "高兴" : "难过"
  })
  // 函数
  const changeMood = () => {
    data.value.happy = !data.value.happy
  }
  const changeName = () => {
    data.value.name = data.value.happy ? "jack" : "tom"
  }

  // 深度侦听
  // watch(data, (val) => {
  //   console.log(`happy属性发生了变化，${val.happy}`)
  //   console.log(`name属性发生了变化，${val.name}`)
  // }, {deep: true, immediate: true})

  // 精确侦听 data.value.happy
  watch(() => data.value.happy, (val) => {
    console.log(`happy属性发生了变化，${val}`)
  }, {immediate: true})
  
</script>

<template>
  <div>
    <h2>我是{{data.name}},今天我很{{ mood }}</h2>
    <button @click="changeMood">改变心情</button>
    <br>
    <button @click="changeName">改变姓名</button>
  </div>
</template>

<style scoped>

</style>
