/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 00:48:52 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 00:53:35
 */

//手写new操作符
function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  if (res && (typeof res === 'function' || typeof res === 'object')) {
    return res
  }
  return obj
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