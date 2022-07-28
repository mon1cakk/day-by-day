/*
 * @Author: LeslieChen 
 * @Date: 2022-07-28 01:20:44 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-28 23:15:26
 */

//实现一个 once 函数，记忆返回结果只执行一次
// const f = (x) => x;
// const onceF = once(f);
//=> 3
// onceF(3);
//=> 3
// onceF(4);

function once(fn) {
  let temp = false;
  let res = null;
  return function() {
    if(temp) {
      console.log('第二次')
      return res
    }
    temp = true;
    if(typeof fn === 'function') {
      console.log(fn.apply(this, arguments))
      return fn.apply(this, arguments)
    }else {
      res = fn
      console.log(res, '第一次')
      return res
    }
  }
}
const fn = 7
const onceF = once(fn)
onceF(fn)
onceF(fn)