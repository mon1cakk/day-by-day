/*
 * @Author: LeslieChen 
 * @Date: 2023-03-27 07:28:06 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-27 07:32:47
 */

//实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10

const add = (...args) => {
  let allArgs = [...args];
  const fn = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    return fn
  }
  fn.toString = function () {
    if (!allArgs.length) return
    allArgs.reduce((a, b) => a + b);
  }
  return fn
}

console.log(add(1)(2)(3)())
console.log(add(1,2,3)(4)())