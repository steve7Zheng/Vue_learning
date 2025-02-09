import { createApp } from 'vue'
import App from './App.vue'
// npm i pinia
// 引入
import {createPinia} from 'pinia'
const pinia = createPinia()
// use(pinia)
createApp(App).use(pinia).mount('#app')
