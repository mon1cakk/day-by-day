/*
 * @Author: LeslieChen 
 * @Date: 2022-06-28 00:38:20 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-06-29 07:53:28
 */

// 数组中找到与目标值最接近的数字
// arr = [1, 3, 5, 6, 10];
// target = 7; -> 6
// target = 3; -> 3

function closeNumber(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while(right - left > 1) {
    mid = Math.floor(left + (right - left) / 2);
    if(array[mid] < target) {
      left = mid;
    }else {
      right = mid
    }
  }
  return Math.abs(array[left] - target) > Math.abs(array[right] - target)? array[right]: array[left]
}
const arr2 = [1, 3, 5, 8, 10, 11, 14, 16, 18];
const res3 = closeNumber(arr2, 13);
const res4 = closeNumber(arr2, 0);
console.log('res3: ', res3);
console.log('res4: ', res4);