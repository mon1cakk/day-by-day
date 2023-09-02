/*
 * @Author: LeslieChen 
 * @Date: 2023-03-28 08:12:21 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-28 08:15:20
 */

//Object.is 实现
Object.is = function(x, y) {
  if (x === y) {
    return x !==0 || 1 / x === 1 / y
  }
  return x !== x && y !== y
}