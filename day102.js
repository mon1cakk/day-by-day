/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 23:10:37 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 23:13:27
 */

//手写防抖函数
function debounce(fn, time) {
  let timer = null;
  return function(args) {
    let ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, time);
  }
}