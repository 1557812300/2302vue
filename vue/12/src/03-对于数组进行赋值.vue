
<template>
  <div>
    App.vue 
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup>
  import {reactive,onMounted,ref} from 'vue'
  // let arr:Array<number> = reactive([])

  let arr = ref<Array<number>>([])
  onMounted(()=>{
    setTimeout(() => {
      // 对数组进行更改-方式一往数组里面添加元素
      // arr = [1,2,3,4,5]  // 直接直接将Proxy对象进行引用赋值了，变成了普通的js数组对象
      // arr.push(...[1,2,3,4,5]) // Proxy对象的地址不变，往里面添加数据。

      // ref对象的话，ref.value赋值为新的数组
      arr.value = [1,2,3,4,5] // 因为我们没有对于arr这个ref对象进行地址的更改
      // arr.value.push(...[1,2,3,4,5])
      // console.log('arr-->',arr,arr.value) // refImpl对象
    }, 2000);
  })
</script>


