<script setup>
  // export default {
  //   methods:{
  //     sendAddress(){
  //       this.$emit('funGetAddress','浙江大学软件学院');
  //     },
  //     loadData(data){
  //       console.log(data)
  //     }
  //   }
  // }
  import {ref} from 'vue'
  const address = ref('浙江大学软件学院')
  const loadData = (data) => {
    console.log(data)
  }
  // 暴露子组件的东西
  defineExpose({
    address,
    loadData
  })
</script>

<template>
  <div class="school-style">
    <h3>子组件-School</h3>
  </div>
</template>

<style scoped>
.school-style {
  background-color: #5bc0de;
}
</style>