/*
 * @Author: LeslieChen 
 * @Date: 2022-06-23 08:15:43 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-06-28 00:11:04
 */

// 字符串全排列
/**
 * 示例1
 * 输入: abc
 * 输出: abc acb bac bca cab cba
 * 
 * 示例2
 * 输入: abcd
 * 输出: abcd abdc acbd acdb adbc adcb ... dcba -> 共计24个值
 */

 function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
 
function perm(arr) {
  function fn(n) {
    for (let i = n; i < arr.length; i++) {
      swap(arr, i, n);
      if (n + 1 < arr.length - 1) {
        fn(n + 1);
      } else {
        console.log(arr);
      }
      swap(arr, i, n);
    }
  }
  fn(0);
}
const res = perm(['a', 'b', 'c', 'd']);
// console.log(res);

//方法二 回溯+去重
const permutation = function(s) {
  const res = new Set();// 用于去重
  const visit = {}
  function dfs(path) {
    if(path.length === s.length) return res.add(path);// 终止条件
    for (let i = 0; i < s.length; i++) {
      if (!visit[i]){
        visit[i] = true;// 标记访问
        dfs(path + s[i]);// 递归
        visit[i] = false;// 回溯，将标记解除
      }
    }
  }
  dfs('');
  return [...res];
};
const res1 = permutation(['a', 'b', 'c', 'd']);
console.log(res1);