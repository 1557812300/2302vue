
<template>
  <div>
    <h2>{{ x }} - {{ y }}</h2>
    <ul>
      <li v-for="item in data2" :key="item.id">
        <h4>{{ item.title }}</h4>
      </li>
    </ul>
  </div>
</template>

  
<script lang="ts" setup>
  import {ref, unref, watch, watchEffect} from 'vue'
  import useMouse from '@/hooks/useMouse'
  const {x,y} = useMouse()

  // 请求数据
  interface Item{
    id:string
    title:string
    [key:string]:any
  }
  // const data = ref<Array<Item>>([])

  // fetch第一个then里面获取不到数据，只能拿到请求的相关状态 
  // 在第二个then的回调中才可以获取数据
  function useFetch (url:any) {
    const data = ref<Array<any>>([])
    watchEffect(()=>{
      fetch(unref(url)) // url.value
      .then((res) => res.json() )
      .then((res) => {
        data.value = res.object_list
      })
    })

    // 也可以采用下面的方案实现
  //   watch(url,(val:any)=>{
  //     fetch(val) 
  //     .then((res) => res.json() )
  //     .then((res) => {
  //       data.value = res.object_list
  //     })
  //   },{immediate: true})

    return {
      data
    }
  }

  let urlRef = ref('/db/in_theaters?limit=5')
  setTimeout(() => {
    urlRef.value = '/db/in_theaters?limit=10'
  }, 3000);
  const {data: data2} = useFetch(urlRef)


  

  
</script>


