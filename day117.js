/*
 * @Author: LeslieChen 
 * @Date: 2023-03-10 00:50:19 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-10 00:55:05
 */

//手写 instanceof 操作符实现
function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof('111', String))
console.log(myInstanceof(new String('7777'), String))