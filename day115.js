/*
 * @Author: LeslieChen 
 * @Date: 2023-03-09 01:12:58 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-09 01:15:42
 */

//手写 new 操作符实现

function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const res = fn.call(obj, ...args);
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj
}