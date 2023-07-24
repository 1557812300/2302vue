
// 定义联合类型变量
// 如果参数是联合类型的话，内部需要调用他们公共的属性或者方法才可以。否则需要单独相关的业务处理
// function getLength (str:string|number):number {
//   if(typeof str === 'string') {
//     return str.length
//   }else{
//     return 0
//   }
// }

// function getLength (str:string|number):string {
//   return str.toString()
// }
// console.log(getLength(100))



// 类型断言与接口
// interface Stu{
//   name:string
//   age:number
//   score?:string // 代表score是可选属性
//   [key:string]:any  // 学生后续会有很多的属性
// }


// 方式一：通过类型断言的方式解决
// const student = {} as Stu  // 将student对象进行类型断言，断言为Stu接口规范的对象
// student.name = '张三'
// student.age = 18


// 方式二：直接实现接口
// const student:Stu = {
//   name: '张三',
//   age: 18,
//   address: '山东青岛',
//   sex: '男'
// }



// ?的使用
const a = {
  b: {
    c: 7
  }
}
// console.log(a?.b?.c)
// console.log(a && a.b && a.b.c)
console.log(a!.b) // 告诉ts，在编译阶段a是有值的。
