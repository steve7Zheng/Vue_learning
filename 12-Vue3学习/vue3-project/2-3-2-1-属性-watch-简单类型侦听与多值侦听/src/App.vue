<script setup>
  // export default {
  //   data(){
  //     return{
  //       happy: true,
  //       name: "jack",
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
  //     }
  //   }
  // }
  import {ref, watch, computed} from 'vue'
  let happy = ref(true)
  let name = ref('jack')
  const changeMood = () => {
    happy.value = !happy.value
    name.value = happy.value ? 'jack' : 'tom'
  }
  const mood = computed(() => {
    return happy.value ? '高兴' : '难过'
  })
  // 简单类型侦听
  watch(happy, (newVal, oldVal) => {
    console.log(`happy属性发生了变化，新值为：${newVal} 旧值为${oldVal}`)
  })
  // 多值侦听
  watch([happy, name], ([newHappy, newName], [oldHappy, oldName]) => {
    console.log(`happy或name属性发生了变化，新值为：${newHappy} ${newName} 旧值为${oldHappy} ${oldName}`)
  })
</script>

<template>
  <div>
    <h2>我是{{name}},今天我很{{ mood }}</h2>
    <button @click="changeMood">改变心情</button>
    <br>
  </div>
</template>

<style scoped>

</style>