/*
 * @Author: LeslieChen 
 * @Date: 2023-02-21 01:56:55 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-21 02:05:50
 */

//数组扁平化
function flatten(arr) {
  if (!arr.length) return
  return arr.reduce((prev, curr) => 
    Array.isArray(curr) ? [...prev, ...flatten(curr)] : [...prev, curr]
  , [])
}
console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

function flatter(arr) {
  if (!arr.length) return
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
