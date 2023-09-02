/*
 * @Author: LeslieChen 
 * @Date: 2023-03-10 00:55:42 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-10 03:17:38
 */

//实现柯里化

// 用法如下：
// const add = (a, b, c) => a + b + c;
// const a = currying(add, 1);
// console.log(a(2,3))

function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args];
  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    if (allArgs.length === length) {
      return fn(...allArgs)
    } else {
      return res
    }
  }
  return res
}

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))
console.log(a(2,3,4))