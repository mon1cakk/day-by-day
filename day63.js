/*
 * @Author: LeslieChen 
 * @Date: 2022-08-14 12:41:56 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-15 19:12:23
 */

//Object.is 实现

// Object.is不会转换被比较的两个值的类型，这点和===更为相似，他们之间也存在一些区别。
// 1. NaN在===中是不相等的，而在Object.is中是相等的
// 2. +0和-0在===中是相等的，而在Object.is中是不相等的

function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
}

console.log(is(NaN, NaN))
console.log(is(0, 0))