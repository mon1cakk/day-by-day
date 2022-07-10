/*
 * @Author: LeslieChen 
 * @Date: 2022-07-10 15:05:36 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-10 16:25:28
 */

//settimeout 模拟实现 setinterval(带清除定时器的版本)
//题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗

function mySetInterval(fn, time) {
  const timeOut = function() {
    setTimeout(timeOut, time);
    fn.apply(this, arguments)
  }
  timeOut()
}

const add = () => {
  console.log('777');
}
console.log(mySetInterval(add, 500))

function mySettimeout(fn, t) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel:()=>{
      clearTimeout(timer)
    }
  }
}
// console.log(mySettimeout(add, 500))