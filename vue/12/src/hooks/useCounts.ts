import {computed, onMounted, reactive, ref, watch} from 'vue'

// 封装了count相关业务的自定义hook函数
export default function useCount (num:number) {
  const count = ref(num)
  const doubleCount = computed(()=>count.value*2)
  const add = ()=>count.value++
  const reduce = ()=>count.value--

  // 通过watch监听ref变量
  // const count2 = ref(100)
  // watch([count,count2],(newValue,oldValue)=>{
  //   console.log(newValue,oldValue) // [2,100] [1,100]
  // })


  // 通过watch监听reactive对象
  const userInfo = reactive({age: 18})
  // 当直接侦听一个响应式对象时，侦听器会自动启用深层模式
  // watch(userInfo,(newValue,oldValue)=>{
  //   console.log(newValue,oldValue)
  // })

  // 如果要监听reactive对象里面的属性的变化，需要写成getter函数的形式
  // const stop = watch(()=>userInfo.age,(newValue,oldValue)=>{
  //   console.log(newValue,oldValue)
  // })

  // 当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发。
  // watch(()=>userInfo,(newValue,oldValue)=>{
  //   console.log(newValue,oldValue)
  // },{deep: true})


  // 关闭对于age的监听
  const stopUserAge = ()=>{
    stop() // 关闭监听了
  }

  return {
    count,
    doubleCount,
    add,
    reduce,
    userInfo,
    stopUserAge
  }
}