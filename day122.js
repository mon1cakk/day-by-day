/*
 * @Author: LeslieChen 
 * @Date: 2023-03-15 02:08:50 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-15 02:12:21
 */

//实现一个快排
function quickSort(arr) {
  if (arr.length < 2) return arr
  const temp = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= temp && i !== arr.length - 1);
  const right = arr.filter(v => v > temp);
  return [...quickSort(left), temp, ...quickSort(right)]
}

console.log(quickSort([3, 6, 2, 4, 1]));