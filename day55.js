/*
 * @Author: LeslieChen 
 * @Date: 2022-08-03 21:54:23 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-06 23:49:35
 */

//如何实现一个深比较的函数 deepEqual

function isEqual(x, y) {
  if (x === y) {
    return true;
  } else if (
    typeof x === "object" &&
    x !== null &&
    typeof y === "object" &&
    y !== null
  ) {
    const keysX = Object.keys(x);
    const keysY = Object.keys(y);
    if (keysX.length !== keysY.length) {
      return false;
    }
    for (const key of keysX) {
      if (!isEqual(x[key], y[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isEqual([1, 2, 3], [1, 2, 3]));
console.log(isEqual([1, 2, 3], [1, 2, 2]));