/*
 * @Author: LeslieChen 
 * @Date: 2022-10-16 18:51:11 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-10-16 18:57:31
 */

//js实现函数缓存
const memorize = function(fn) {
  const cache = {};
  return function(...args) {
    const _args = JSON.stringify(args);
    return cache[_args] || (cache[_args] = fn.apply(fn, args));
  }
}
const add = (a, b) => {
  console.log('开始缓存了')
  return a + b
}

const adder = memorize(add);
console.log(adder(2, 3))
console.log(adder(2, 3))