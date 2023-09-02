/*
 * @Author: LeslieChen 
 * @Date: 2023-03-22 02:01:54 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-22 02:14:58
 */

//手写防抖节流
function debounce(fn, delay = 300) {
  let timer = null;
  return function() {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle(fn, delay = 300) {
  let prev = 0;
  return function() {
    const args = arguments;
    const now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, args);
      prev = now;
    }
  }
}