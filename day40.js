/*
 * @Author: LeslieChen 
 * @Date: 2022-07-18 21:19:33 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-18 21:41:56
 */

//手写一个new操作符

// 手写一个new
// function myNew(fn, ...args) {
//   if (typeof func !== 'function') {
//     throw 'func must be a function'
//   }
//   // let obj = Object.create(func.prototype)
//   // 创建一个空对象
//   let obj = {}
//   // 使空对象的隐式原型指向原函数的显式原型
//   obj.__proto__ = fn.prototype
//   // this指向obj
//   let result = fn.apply(obj, args)
//   // 返回
//   return result instanceof Object ? result : obj
// }
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "leslieChen", 17);
console.log(p1.name);
console.log(p1);
p1.say();