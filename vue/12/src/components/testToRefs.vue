<template>
  <div>
    test...{{ num }}
    <button @click="change">孩子更改num数据</button>
  </div>
</template>

<script lang='ts' setup>
// 如何获取外部传入的num属性呢？
import type { PropType } from 'vue'
interface User{
  name:string
  age:number
}
const props = defineProps({
  num: { type: Number, required: true },
  user: Object as PropType<User>
})


// 实现子父通信，通过defineEits获取emit方法，后续调用它
// 更改的方法
// const emit = defineEmits(['changeNum'])
const emit = defineEmits<{
  changeNum: [numVal: number,numVal2:number]
}>()
const change = ()=>{
  // 需要触发绑定在自身的自定义事件 changeNum
  // this.$emit('changeNum',100)
  emit('changeNum',100,200)
}


// 子组件的某些方法，需要借助defineExpose将其向外暴露
// 这样的话，父组件通过ref标记后，就可以获取暴漏的方法了
// say方法
const say = function () {
  console.log('child-say...')
}
defineExpose({
  say
})




// interface User{
//   name:string
//   age:number
// }
// interface Iprops{
//   num:number
//   user:User
// }
// const props = defineProps<Iprops>()
</script>

<style lang="scss" scoped>

</style>