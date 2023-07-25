import {computed, onMounted, ref} from 'vue'

// 封装了count相关业务的自定义hook函数
export default function useCount (num:number) {
  const count = ref(num)
  const doubleCount = computed(()=>count.value*2)
  const add = ()=>count.value++
  const reduce = ()=>count.value--

  // onMounted(()=>{
  //   console.log('挂载完毕之后的业务....')
  // })

  return {
    count,
    doubleCount,
    add,
    reduce
  }
}