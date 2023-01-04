/*
 * @Author: LeslieChen 
 * @Date: 2022-11-28 22:24:08 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-28 22:36:09
 */

//打印出 1~10000 以内的对称数
const isSymmetryNum = (start, end) => {
  const res = [];
  for(let i = start ; i <= end ; i++) {
    const str = String(i);
    if (str.length <= 1) continue
    if (str.split('').reverse().join('') === str) {
      res.push(i);
    }
  }
  return res
}
console.log(isSymmetryNum(1, 1000))