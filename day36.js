/*
 * @Author: LeslieChen 
 * @Date: 2022-07-12 23:40:58 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-12 23:41:57
 */

//实现一个方法使多维数组变成一维数组

function flatter(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

function flatter1(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatter1([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
