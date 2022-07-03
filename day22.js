/*
 * @Author: LeslieChen 
 * @Date: 2022-06-21 22:10:42 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-03 11:42:14
 */

// 算法题：数组中n个连续元素的最大和
// [2, 5, 3, 4, 6], 2 => 10
// [2, 5, 3, 4, 6], 3 => 13

function continueMaxSum(arr, n) {
  let max = 0;
  let preSum = 0;
  const length = arr.length;
  for(let i = 0; i < length; i++) {
    if(i === 0) {
      for (let j = 0; j < n; j++) {
        max += arr[j];
      }
      preSum = max;
    }else {
      const temp = preSum - arr[i -1] + arr[i -1 + n];
      if(temp > max) {
        max = temp
      }
      preSum = max
    }
  }
  return max
}

const arr1 = [2, 5, 3, 4, 6];
console.log(continueMaxSum(arr1, 2));
console.log(continueMaxSum(arr1, 3));