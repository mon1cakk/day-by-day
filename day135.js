/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 06:36:04 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 06:39:31
 */

//实现一个 compose 函数
function compose(...fn) {
  if (!fn.length) return v => v
  if (fn.length === 1) return fn[0]
  return fn.reduce((prev, curr) => (...args) => prev(curr(...args)))
}

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11