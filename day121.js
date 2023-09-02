/*
 * @Author: LeslieChen 
 * @Date: 2023-03-15 01:46:40 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-15 01:49:49
 */

//实现一个插入排序
function insertSort(arr) {
  const len = arr.length;
  for(let i = 1 ; i < len ; i++) {
    let j = i;
    let target = arr[j];
    while(j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--
    }
    arr[j] = target;
  }
  return arr
}

console.log(insertSort([3, 6, 2, 4, 1]));