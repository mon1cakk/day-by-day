/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 07:21:47 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 07:37:38
 */

//数组扁平化
function flatten(arr) {
  if (!arr.length) return
  return arr.reduce((prev, curr) => {
    return Array.isArray(curr) ? [...prev, ...flatten(curr)] : [...prev, curr]
  }, [])
}
console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

function flatter(arr) {
  if (!arr.length) return
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
