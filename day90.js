/*
 * @Author: LeslieChen 
 * @Date: 2022-11-27 20:01:12 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-27 20:05:28
 */

//使用递归完成 1 到 100 的累加
const sum = (n) => {
  if (n === 1) return 1
  return n + sum(n - 1)
}
const final = (curr, total = 0) => {
  return curr === 0 ? total : final(curr - 1, total + curr)
}
console.log(sum(100));
console.log(final(100));