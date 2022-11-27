/*
 * @Author: LeslieChen 
 * @Date: 2022-11-27 20:08:32 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-27 20:16:47
 */

//实现一个字符串匹配算法indexOf
const strStr = (source, target) => {
  if (target === '') return 0
  let i = 0, j = 1;
  while(i < source.length) {
    if (source.slice(i, j) === target) {
      return i
    }
    if (j < source.length) {
      j++
    } else {
      i++
      j = i + 1;
    }
  }
  return -1
}
console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))