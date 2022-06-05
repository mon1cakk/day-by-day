/**
 * 有规律的合并两个数组
 * [A1, A2, A3, B1, B2, C1, C2, C3, D1, D2]-数组1
 * [A, B, C, D]-数组2
 * 合并为 [A1, A2, A3, A, B1, B2, B, C1, C2, C3, C, D1, D2, D]
 */

function concatArray(arr1, arr2) {
  const result = [];
  let j = 0;
  let item = arr2[j];
  for(let i = 0; i < arr1.length; i++) {
    if(item === arr1[i].charAt(0)) {
      result.push(arr1[i]);
    }else {
      result.push(item);
      result.push(arr1[i]);
      ++j;
      item = arr2[j];
    }
    if(i === arr1.length - 1) {
      result.push(item);
    }
  }
  return result
}
const arr1 = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'C3', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];
console.log(concatArray(arr1, arr2));