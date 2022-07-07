/*
 * @Author: LeslieChen 
 * @Date: 2022-07-05 23:53:14 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-06 02:01:15
 */

//对象扁平化
// 实现一个 flatten 函数，实现如下的转换功能
const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};
// 转换为
let objRes = {
  a: 1,
  "b[0]": 1,
  "b[1]": 2,
  "b[2].c": true,
  "c.e": 2,
  "c.f": 3,
  g: null,
};