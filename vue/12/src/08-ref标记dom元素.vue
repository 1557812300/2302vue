
<template>
  <div>
    <h1 ref="h1Ref" >我是h1</h1>
  </div>
</template>


<script lang="ts" setup>
  import {onMounted, ref} from 'vue'
  // 创建了h1相关的ref对象，进行h1这个元素的标记
  const h1Ref = ref<HTMLElement | null>(null)
  // const clickH1 = ()=>{ // 真实dom节点h1已经出现了，然后点击h1标题的时候才会触发此函数
  //   console.log(h1Ref.value)
  // }

  // console.log(h1Ref.value)
  onMounted(()=>{
    h1Ref.value!.style.background = 'yellow'
  })
</script>


