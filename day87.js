/*
 * @Author: LeslieChen 
 * @Date: 2022-11-23 01:47:56 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-23 01:52:34
 */

//instanceof
function myInstanceof(left, right) {
  if(typeof left !== 'object' || left === null) {
    return false
  }
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true