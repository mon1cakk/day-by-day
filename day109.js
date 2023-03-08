/*
 * @Author: LeslieChen 
 * @Date: 2023-02-18 12:04:31 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-18 12:18:21
 */

//settimeout 模拟实现 setinterval(带清除定时器的版本)
function mySettimeout(fn, delay) {
  let timer = null;
  const interval = () => {
    fn();
    timer = setTimeout(interval, delay);
  }
  interval()
  return {
    cancel: () => {
      clearTimeout(timer);
    }
  }
}

const a = () => console.log('1')
const time = mySettimeout(a, 700)
setTimeout(() => {
  time.cancel()
}, 3000)

//setinterval 模拟实现 settimeout 
const mySetTimeout = (fn, delay) => {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, delay)
}
const b = () => console.log('7')
const time1 = mySetTimeout(b, 700)

