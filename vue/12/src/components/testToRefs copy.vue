<template>
  <div>
    test...{{ num }}
  </div>
</template>

<script lang='ts'>
import {defineComponent,onUpdated,toRef,toRefs} from 'vue'
export default defineComponent({
  props: {
    num: {
      type: Number
    }
  },
  setup (props) {
    const num = toRef(props,'num')
    // 数据更新的时候，触发onUpdated钩子函数
    // onUpdated(()=>{
    //   console.log('数据改变了---》',props.num)
    // })
  }
})
</script>

<style lang="scss" scoped>

</style>