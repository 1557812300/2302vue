
// ts的基本类型-数值类型
// let num:number|string = 100  // 联合类型num要么是number,要么是string
// num = '100'

// 数组类型
// const arr:number[] | string[] = ['1','2','3']  // 数组arr里面要么全放number,要么全放string
// const arr:(number|string|boolean)[] = [1,2,3,'4',false]
// const arr:Array<number|string> = [1,2,'3'] // 采用数组泛型的方式定义数组
// const arr:any = [1,2,3,'4',false]  // arr数组里面可以放置任何内容，any指代任意类型，默认不写就是any


// 元祖类型
// const tuple:[number,string] = [1,'1']  // 定义了元祖类型的数组tuple


// void类型
// 如果函数内部return没有任何类型的话，那么就可以声明为void类型
// const fn2 = ():void=>{
// }
// const fn3 = ():string=>{
//   return '100'
// }
// function fn4 ():string {
//   return '100'
// }



// never类型是其他类型的子类型，代表从来不会出现的值
// let x:number = 100
// const y:never = (function () { throw new Error('exception...') })()
// x = y // 将never赋值给x

// 函数如果死循环，也可以定义为never类型
// function loop ():never {
//   // eslint-disable-next-line no-constant-condition
//   while(true) {
//     console.log('死循环...')
//   }
// }



// 枚举类型
// 类似于对象，可以通过key找到value值
// enum Sex{
//   MAN,
//   WOMAN
// }

// const child:Sex = Sex.WOMAN // 默认第一项下标是0
// console.log(child) // 1
// console.log(Sex[1]) // WOMAN