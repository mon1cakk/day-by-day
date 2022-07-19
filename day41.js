/*
 * @Author: LeslieChen 
 * @Date: 2022-07-19 20:54:06 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-19 21:18:52
 */

const array = [3, 6, 2, 4, 1];
//冒泡排序
function bubble(arr) {
  const length = arr.length;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr
}
console.log(bubble(array))

//插入排序
function insert(arr) {
  const length = arr.length;
  for(let i = 1; i < length; i++) {
    let j = i;
    let target = arr[j];
    while(j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr
}
console.log(insert(array))

//快速排序
function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const right = arr.filter((v) => v > cur);
  return [...quick(left), cur, ...quick(right)]
}
console.log(quick(array))
