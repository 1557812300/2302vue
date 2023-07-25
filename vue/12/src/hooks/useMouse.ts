import {onMounted, onUnmounted, ref} from 'vue'

function useEventListener (target:any,event:any,update:any) {
  onMounted(()=>{
    target.addEventListener(event,update)
  })
  onUnmounted(()=>{
    target.removeEventListener(event,update)
  })
}

export default function useMouse () {
  const x = ref(0)
  const y = ref(0)
  const update = function (e:any) {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 调用其他的组合式函数useEventListener
  useEventListener(window,'mousemove',update)

  // onMounted(()=>{
  //   window.addEventListener('mousemove',update)
  // })
  // onUnmounted(()=>{
  //   window.removeEventListener('mousemove',update)
  // })
  return {
    x,
    y
  }
}