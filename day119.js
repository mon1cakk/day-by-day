/*
 * @Author: LeslieChen 
 * @Date: 2023-03-15 01:22:12 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-15 01:46:18
 */

//实现一个冒泡排序
function bubbleSort(arr) {
  const len = arr.length;
  for(let i = 0 ; i < len ; i++) {
    for(let j = 0 ; j < len - 1 - i ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr
}

console.log(bubbleSort([3, 6, 2, 4, 1]));