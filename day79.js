/*
 * @Author: LeslieChen 
 * @Date: 2022-10-05 20:11:15 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-10-05 20:16:41
 */

/**
 * 将数组分割成指定大小的小数组
 * [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 2) = 4
 *    => [[1, 2], [3, 4], [5, 6], [7]]
 * [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 3) = 3
 *    => [[1, 2, 3], [4, 5, 6], [7]]
 */

const chunkArr = (arr, size) => {
  const res = [];
  let index = 0;
  while(index < arr.length) {
    res.push(arr.slice(index, index + size));
    index += size
  }
  return res
}
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArr(arr, 3))
console.log(chunkArr(arr, 2))