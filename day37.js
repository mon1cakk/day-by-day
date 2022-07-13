/*
 * @Author: LeslieChen 
 * @Date: 2022-07-13 23:21:38 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-13 23:37:17
 */

//手写 instanceof 操作符实现

function myInstanceOf(left, right) {
  if(typeof left !== 'object' || left === null) {
    return false
  }
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if(proto === null) return false
    if(proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceOf('111', String))
console.log(myInstanceOf(new String('7777'), String))