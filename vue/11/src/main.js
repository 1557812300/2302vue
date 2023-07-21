
import { createApp } from 'vue'
import App from './App.vue'
// import Child from '@/components/child.vue'
const app = createApp(App)

// 全局注册Child组件
// app.component('Child',Child)
app.mount('#app')
