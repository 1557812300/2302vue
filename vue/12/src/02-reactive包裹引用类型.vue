
<template>
  <div>
    <h2 @click="change(2)">{{ obj.num }}</h2>
  </div>
</template>


<script lang="ts" setup>
  import { reactive,isProxy } from 'vue'
  const obj = reactive({num: 1}) // reactive内部只能放置对象、数组引用类型。
  // console.log('isProxy--->',isProxy(obj))
  const change = (num:number)=>{
    obj.num = num
  }
</script>

<!-- <script lang="ts"> 
  import { defineComponent,reactive } from 'vue'
  export default defineComponent({
    setup () {
      // const obj = ref({num: 1}) // 如果ref内部包裹的是引用类型的话，背后其实求助了reactive将对象转成proxy代理对象
      // // console.log('obj.value---',obj.value) // obj.value -- Proxy(object)
      // const change = (num:number)=>{
      //   obj.value.num = num
      // }

      const obj = reactive({num: 1}) // reactive内部只能放置对象、数组引用类型。
      console.log('obj---',obj)
      const change = (num:number)=>{
        obj.num = num
      }
      return {
        obj,
        change
      }
    },
  })
</script> -->
