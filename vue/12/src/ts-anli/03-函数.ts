

// 函数声明方式
// function sum (x:number,y?:number):number {
//   return x+(y||1)
// }
// sum(1,100)


// 函数表达式方式
// const num:number = 100
// 定义fn函数，有两个参数，并且是number类型，该函数返回是number类型
// const fn:(x:number,y:number)=>number = (x:number,y:number):number=>x+y
// fn(1,100)


// 通过接口定义函数
// interface Fn{
//   ():string
// }
// const myFn:Fn= ():string=>'helloworld'

// 111
// 剩余参数 (展开运算符)
// function push (array:number[],...items:number[]) {
//   items.forEach((item:number)=>{
//     array.push(item)
//   })
// }
// const arr:number[] = []
// push(arr,4,5,6)
// console.log(arr)




