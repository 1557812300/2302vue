// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 定义函数的时候，指定了T类型。只有当函数调用的时候，才会传给他具体的类型。
// function createArray<T> (length:number,value:T):T[] {
//   const result:T[] = []
//   for(let i=0;i<length;i++) {
//     result[i] = value
//   }
//   return result
// }
// console.log(createArray(3,100)) // [100,100,100]


// 多个类型的参数
// 这样定义完毕后，实际参数第一个'3'那么就是T的类型，第二个参数false那么就是U的类型
// function swap<T,U> (tuple:[T,U]):[U,T] {  // function swap(tuple:[string,boolen]):[boolean,string]{}
//   return [tuple[1],tuple[0]]
// }
// console.log(swap(['3',false])) 


// interface Length{
//   length:number
// }
// // T类型必须要有Length接口的里面的length属性才可以
// function getLength<T extends Length> (str:T) {
//   return str.length
// }
// console.log(getLength({length: 1000})) 