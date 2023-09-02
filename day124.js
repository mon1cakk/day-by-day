/*
 * @Author: LeslieChen 
 * @Date: 2023-03-16 23:56:54 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-17 00:08:56
 */

//实现函数缓存
const memorize = (fn) => {
  const cache = {};
  return function() {
    let args = [...arguments];
    let _args = JSON.stringify(args);
    return cache[_args] || (cache[_args] = fn.apply(fn, args))
  }
}
const add = function() {
  console.log('开始缓存')
  let arr = [...arguments]
  return arr.reduce((a,b)=>a+b);
}
const adder = memorize(add)
const adder1 = memorize()

console.log(adder(2, 6));
console.log(adder(2, 6));
console.log(adder(8, 7));
console.log('xx', adder1)