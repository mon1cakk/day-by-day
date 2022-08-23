/*
 * @Author: LeslieChen 
 * @Date: 2022-08-23 21:49:09 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-23 22:12:56
 */

//setinterval 模拟实现 settimeout

function mySetTimeout(fn, time) {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time)
}

mySetTimeout(()=>{
  console.log(1);
},1000)