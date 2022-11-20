/*
 * @Author: LeslieChen 
 * @Date: 2022-09-25 23:53:47 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-09-26 00:17:32
 */

//用setTimeout实现setInterval
function mySetInterval(fn, time) {
  let timer = null;
  const timeOut = () => {
    fn();
    timer = setTimeout(timeOut, time)
  }
  timeOut();
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}

//用setInterval实现setTimeout
function mySetTimeout(fn, time) {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, time)
}
mySetTimeout(() => {
  console.log('777')
}, 300)