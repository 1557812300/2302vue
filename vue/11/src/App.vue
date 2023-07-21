<script>
  // 1.引入child.vue组件
  import Child from './components/child.vue'
  export default {
    name: 'App',
    components: { // 2.局部注册组件
      Child
    },
  }  
</script>  

<template>  
  <div>
    <h2 class="h2">我是App.vue</h2>
    <Child/>
  </div>
</template>

<style lang="scss">
  
</style>
