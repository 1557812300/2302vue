// 如果要定义一个对象的 key 和 value 类型该怎么做呢？这时候就需要用到 TS 的 Record 了
// type Page = 'home' | 'about' | 'mine'
// interface PageValue {
//   title:string
// }
// const nav:Record<Page,PageValue> = {
//   home: {title: '首页'},
//   about: {title: '关于'},
//   mine: {title: '我的'},
// }



// Partial<T>的作用就是将某个类型中的属性全部变为可选项
// interface User{
//   name:string
//   age:number
//   sex:string
// }
// const xiaoming:Partial<User> = {
//   name: '张三'
// }


// interface User{
//   name:string
//   age:number
//   [key:string]:any
// }

// // 参数arg是T类型，但是对象里面的name与age是可选的
// function student<T extends User> (arg:Partial<T>) :number {
//   return arg.age || 1
// }
// student({name: '张三'}) 



// interface User{
//   name:string
//   age:number
//   [key:string]:any
// }
// type Form = Partial<User>
// const user:Form = {
//   a: 1
// }

