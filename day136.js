/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 06:46:24 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 06:55:37
 */

//settimeout 模拟实现 setinterval(带清除定时器的版本)
function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(() => {
      interval();
    }, t)
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}

let a=mySettimeout(()=>{
  console.log(111);
},1000).cancel()
let b=mySettimeout(() => {
  console.log(222)
}, 1000).cancel()

const mySetTimeout = (fn, t) => {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, t)
}
mySetTimeout(()=>{
  console.log(3);
},1000)