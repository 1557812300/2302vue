
<template>
  <div>
    <h1>count相关的业务</h1>
    <button @click="add">+</button>
    <span>{{ count }} - {{ doubleCount }}</span>
    <button @click="reduce">-</button>
  </div>
</template>

  
<script lang="ts" setup>
  import useCount from '@/hooks/useCounts'
  // 使用count相关的业务
  const {count,doubleCount,add,reduce} = useCount(1)
</script>


