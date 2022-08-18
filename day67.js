/*
 * @Author: LeslieChen 
 * @Date: 2022-08-18 02:30:56 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-18 22:36:34
 */

//实现防抖节流
function debounce(fn, delay) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    let args = arguments;
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function debounce1(fn, delay) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    let args = arguments;
    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, delay)
    if (callNow) {
      fn.apply(this, args);
    }
  }
}

function debounce2(fn, delay, immediate) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    let args = arguments;
    let that = this;
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, delay)
      if(callNow) {
        fn.apply(that, args);
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(that, args);
      }, delay)
    }
  }
}

function throttle(fn, delay) {
  let prev = 0;
  return function () {
    let now = Date.now();
    let that = this;
    let args = arguments;
    if (now - prev > delay) {
      fn.apply(that, args);
      prev = now;
    }
  }
}

function throttle1(fn, delay) {
  let timeout;
  return function () {
    if (timeout) {
      return
    }
    let args = arguments;
    let that = this;
    timeout = setTimeout(() => {
      fn.apply(that, args);
      timeout = null;
    }, delay)
  }
}