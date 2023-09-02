/*
 * @Author: LeslieChen 
 * @Date: 2023-03-15 01:33:36 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-15 01:45:41
 */

//实现一个选择排序
function selectSort(arr) {
  const len = arr.length;
  let minIndex;
  for(let i = 0 ; i < len - 1 ; i++) {
    minIndex = i;
    for(let j = i + 1 ; j < len ; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr
}

console.log(selectSort([3, 6, 2, 4, 1]));