
<template>
  <div>
    <button @click="count=1">点击了{{ count }}次</button>
    <button @click="stop">停止监听</button>
    <hr/>
    <button @click="id=1">请求第一条数据</button>
    <button @click="id=2">请求第二条数据</button>
    {{ id }}
  </div>
</template>

  
<script lang="ts" setup>
  import {ref, watchEffect} from 'vue'
  const count = ref(0)
  const stop = watchEffect(()=>{
    // console.log('监听的count次数为:'+count.value)
  })

  const id = ref(1)
  watchEffect((onCleanup)=>{
    console.log('------',id.value)
    const timer = setTimeout(() => {
      console.log(`请求第${id.value}条数据...`)
    }, 2000);
    onCleanup(()=>{ // 当id改变的时候，就会执行这个回调函数，可以清除上一次的timer
      // console.log('清除定时器....')
      clearTimeout(timer)
    })
  })
</script>


