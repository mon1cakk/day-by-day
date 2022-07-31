/*
 * @Author: LeslieChen 
 * @Date: 2022-07-31 11:52:28 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-31 12:05:17
 */

// 求正序增长的正整数数组中，其和为 N 的两个数

//=> [5, 10]
// twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);

//=> null
// twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150);

function twoSum(sourceArr, target) {
  const length = sourceArr.length;
  if(length < 2) return null
  const map = new Map();
  const result = [];
  for(let i = 0; i < length; i++) {
    const temp = target - sourceArr[i];
    if (map.has(sourceArr[i])) {
      result.push([sourceArr[i], map.get(sourceArr[i])])
    } else {
      map.set(temp, sourceArr[i]);
    }
  }
  return result.length? result: null
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150));