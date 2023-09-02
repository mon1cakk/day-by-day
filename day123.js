/*
 * @Author: LeslieChen 
 * @Date: 2023-03-16 23:44:52 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-16 23:51:39
 */

//实现归并排序
function merge(left, right) {
  const res = [];
  let i = 0 , j = 0;
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++
    } else {
      res.push(right[j]);
      j++
    }
  }
  if (i < left.length) {
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right)
}
console.log(mergeSort([3, 6, 2, 4, 1]));