/*
 * @Author: LeslieChen 
 * @Date: 2022-11-23 01:31:17 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-23 01:45:50
 */

//Array.prototype.flat
const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]

Array.prototype.flat = function() {
  return this.reduce((prev, curr) => {
    curr instanceof Array ? prev.push(...curr.flat()) : prev.push(curr)
    return prev
  }, [])
}
console.log(arr.flat());

const ary = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]
const flatter = (arr) => {
  if (!arr.length) return
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr
}
console.log('res', flatter(ary))