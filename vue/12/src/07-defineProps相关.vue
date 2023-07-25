
<template>
  <div>
    <h1 @click="num++">num - {{ num }}</h1>
    <button @click="getChildMethods">获取孩子的实例里面的方法</button>
    <TestToRefs ref="childRef" :num="num" :user="user" @changeNum="changeNum"></TestToRefs>
  </div>
</template>


<script lang="ts" setup>
  import TestToRefs from '@/components/testToRefs.vue'
  import {reactive,ref} from 'vue'
  const num = ref<number>(10)
  const user = reactive({name: '张三',age: 18})
  const changeNum = (numVal:number,numVal2:number)=>{
    console.log(numVal,numVal2)
    num.value = numVal
  }

  const childRef = ref<InstanceType<typeof TestToRefs> | null>(null)
  const getChildMethods = ()=>{
    // (childRef.value as any).say()
    childRef.value?.say()
  }
</script>

<!-- <script lang="ts">
  import {defineComponent,reactive,ref} from 'vue'
  import TestToRefs from '@/components/testToRefs.vue'
  export default defineComponent({
    components: {
      TestToRefs
    },
    setup (props,{emit}) {
      const num = ref(10)
      const user = reactive({name: '张三',age: 18})
      const changeNum = (numVal:number,numVal2:number)=>{
        console.log(numVal,numVal2)
        num.value = numVal
      }

      const childRef = ref(null)
      const getChildMethods = ()=>{
        (childRef.value as any).say() // 采用类型断言的方式解决
      }
      return {
        num,
        user,
        changeNum,
        childRef,
        getChildMethods
      }
    }
  })
</script> -->


