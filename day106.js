/*
 * @Author: LeslieChen 
 * @Date: 2023-02-15 23:45:44 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-15 23:49:55
 */

//手写apply函数
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Not a Function")
  }
  context = context || window;
  let fn = Symbol('fn');
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn
  return result
}