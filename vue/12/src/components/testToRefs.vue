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
  // 参数props就是一个Proxy代理对象，不能解构，会失去响应式
  setup (props) {
    // console.log('获取外部传入的num属性...',props.num)

    // 如果非要进行解构，需要借助toRefs|toRef处理才可以
    // const {num} = toRefs(props)
    const num = toRef(props,'num')
    console.log('num-->',num.value) // ObjectRefImpl{}

    // 数据更新的时候，触发onUpdated钩子函数
    // onUpdated(()=>{
    //   console.log('数据改变了---》',props.num)
    // })
  }
})
</script>

<style lang="scss" scoped>

</style>