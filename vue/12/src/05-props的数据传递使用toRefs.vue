
<template>
  <div>
    <h1 @click="num++">num - {{ num }}</h1>
    <TestToRefs :num="num"></TestToRefs>
  </div>
</template>


<script lang="ts">
  import {defineComponent,ref} from 'vue'
  import TestToRefs from '@/components/testToRefs.vue'
  export default defineComponent({
    components: {
      TestToRefs
    },
    setup () {
      const num = ref(10)
      return {
        num
      }
    }
  })

</script>


