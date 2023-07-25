
<template>
  <div>
    <h2 @click="person.name+='!'">{{ person }}</h2>    
    <h3 @click="name+='!'">{{ name }}</h3>
    <h3 @click="job.j1.salary=20">{{ job.j1.salary }}</h3>
  </div>
</template>


<script lang="ts">
  import { reactive,defineComponent,toRef,ref, toRefs } from 'vue';
  export default defineComponent({
    setup () {
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 10
          }
        }
      })

      // 如果通过...展开reactive对象，那么name|age是普通的基本类型，就不会具备响应式了。
      // const {name} = person
      // const nameRef = ref(name) // 不会让之前person的name跟着改变，只是临时的创建了ref对象，让这个新的对象变成了响应式的
      
      // toRef就是复制reactive对象的某个属性，将其变成ref对象
      // const name = toRef(person,'name') // name = ObjectRefImpl{}
      // const age = toRef(person,'age')   // age = ObjectRefImpl{}
      // const job = toRef(person,'job')   // job = ObjectRefImpl{}
      // console.log('name--->',name,age,job)


      // toRefs就是将reactive对象中的所有的属性都变成了objectRefImpl对象
      // toRefs可以用来复制reactive对象里面的属性，都转成ref对象，而且保留的响应式，另外也保留了引用关系。
      // const {name,age,job} = toRefs(person)
      // console.log('toRefs(person)---->',name,age,job)
      return {
        person,
        // name,
        // age
        // job
        ...toRefs(person) // name:'张三',age:18,job:Proxy()
      }
    }
  })

  /*
    let person = {a:1,b:2}
    let a = person.a
    let b = person.b
    a++
    console.log(person.a)
  */
</script>


