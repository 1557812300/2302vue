
<template>
  <div>
    <!-- 注意:ref定义的变量，在js中 ref对象.value获取值，在模板中直接用就可以了 -->
    <h2 @click="changeCount">count -- {{ count }}</h2>
  </div>
</template>

<script lang="ts"> 
  // 引入defineComponent之后，后续在选项式中就可以帮助我们更好的校验代码
  import { defineComponent,ref } from 'vue'
  export default defineComponent({
    setup () {
      // console.log('setup...',this) // setup中不能访问this
      // 定义数据
      let count = ref(100) // ref如果包裹的是基本类型，内部借助了Object.defineProperty进行数据劫持处理。
      // 定义更改数据的方法
      const changeCount = ()=>{
        count.value = 200  // 修改了数据，就会触发set方法，数据更改完毕后，通知订阅者Watcher，内部进行虚拟domdiff算法对比，更新真实dom.
        console.log('count--->',count)
      }
      return { // 必须向外暴露才可以
        count,
        changeCount
      }
    },
  })
</script>
