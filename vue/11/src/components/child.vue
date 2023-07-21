<template>
  <div class="child">
    <h2 class="h2">child.vue...</h2>
    <hr/>
    <One></One>
  </div>
</template>

<script>
import One from './one.vue'
export default {
  components: {
    One
  }
}
</script>

<!--
  scoped限制样式只能影响当前组件 背后的原理？ 会在标签上面添加data-v-xxx属性  后续根据属性选择器找到该元素
  默认子组件里面有h2的class，也不会受到影响，如果希望子组件的样式受到影响的话，需要用到:deep穿透
-->
<style lang="scss" scoped>
  :deep(.one-h2){ //  [data-v-xxx] .h2{color:pink;}
    color:pink;
    font-size: 20px;
    background: yellow;
  }
</style>
