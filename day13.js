/**
 * 将数组分割成指定大小的小数组
 * [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 2) = 4
 *    => [[1, 2], [3, 4], [5, 6], [7]]
 * [1, 2, 3, 4, 5, 6, 7] // Math.ceil(7 / 3) = 3
 *    => [[1, 2, 3], [4, 5, 6], [7]]
 */

function chuckArr(arr, size) {
  const result = [];
  let index = 0;
  while(index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result
}
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(chuckArr(arr, 3))
console.log(chuckArr(arr, 2))