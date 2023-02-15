/*
 * @Author: LeslieChen 
 * @Date: 2023-02-15 23:34:46 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-15 23:41:03
 */

//手写call函数
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    console.error('not a function');
  }
  context = context || window;
  let fn = Symbol('fn');
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn
  return result
}