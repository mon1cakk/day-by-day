/*
 * @Author: LeslieChen 
 * @Date: 2022-10-05 19:58:23 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-10-05 20:10:51
 */

//有规律的合并两个数组
const arr1 = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'C3', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];

const concatArray = (arr1, arr2) => {
  const res = [];
  let j = 0;
  let item = arr2[j];
  for(let i = 0 ; i < arr1.length ; i++) {
    if (item === arr1[i].charAt(0)) {
      res.push(arr1[i]);
    } else {
      res.push(item);
      res.push(arr1[i]);
      j++
      item = arr2[j];
    }
    if (i === arr1.length - 1) {
      res.push(item);
    }
  }
  return res
}
console.log(concatArray(arr1, arr2))