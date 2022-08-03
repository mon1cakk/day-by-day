/*
 * @Author: LeslieChen 
 * @Date: 2022-08-03 01:49:10 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-03 21:48:01
 */

//如何实现一个无限累加的 sum 函数

// sum(1, 2, 3).valueOf(); //6
// sum(2, 3)(2).valueOf(); //7
// sum(1)(2)(3)(4).valueOf(); //10
// sum(2)(4, 1)(2).valueOf(); //9
// sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

function sum(...args) {
  const f = (...rest) => sum(...args, ...rest);
  f.valueOf = () => args.reduce((prev, curr) => prev + curr, 0);
  return f
}

console.log(sum(1, 2, 3).valueOf())
console.log(sum(2, 3)(2).valueOf())
console.log(sum(1)(2)(3)(4)(5)(6).valueOf())