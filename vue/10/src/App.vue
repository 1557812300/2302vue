<template>
  <div>
    <h2>App.vue - {{ msg }}</h2>
  </div>
</template>

<script>
// 这是单文件组件，包含三个部分 template  script  style中
export default {
  name: 'App',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style lang="scss">

</style>
