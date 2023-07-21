<script>
  /*
    异步组件好处：
    用不到的组件不会进行加载，因此打开网页的速度比较快，当你用到这个组件的时候，才会通过异步请求进行加载。
  */
  import {defineAsyncComponent} from 'vue'
  // 1.引入child.vue组件
  // import Child from './components/child.vue'
  export default {
    name: 'App',
    data () {
      return {
        isShow: false
      }
    },
    components: { // 2.局部注册组件
      Child: defineAsyncComponent(()=>import('@/components/child.vue'))
    },
  }  
</script>  

<template>  
  <div>
    <button @click="isShow=!isShow">显示组件</button>
    <Child v-if="isShow"/>
  </div>
</template>

<style scoped>

</style>
