/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 00:40:15 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 00:47:50
 */

//手写instanceof方法
const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) {
    return false
  }
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof('111', String))
console.log(myInstanceof(new String('7777'), String))