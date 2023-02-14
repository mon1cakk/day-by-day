/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 23:28:47 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 23:31:40
 */

//手写节流函数
function throttle(fn, delay) {
  let prev = Date.now();
  return function (args) {
    let ctx = this;
    let curr = Date.now();
    if (curr - prev >= delay) {
      prev = Date.now();
      fn.apply(ctx, args);
    }
  }
}