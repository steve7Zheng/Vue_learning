<script setup>
  import School from "./components/School.vue";
  import {ref} from 'vue'
  // 接收子组件暴露的东西
  const school = ref(null)
  const sendLoadData = () => {
    school.value.loadData({id: 1, name: 'jack'})
  }
</script>

<template>
  <div>
    <h2>父组件-App</h2>
    <h2>学校地址:{{school.address}}</h2>
    <button @click="sendLoadData">向子组件传递数据</button>
    <!-- 下面的school就是上面的school -->
    <School ref="school"></School>
  </div>
</template>