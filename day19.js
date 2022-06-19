/*
 * @Author: LeslieChen 
 * @Date: 2022-06-19 16:11:14 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-06-19 18:08:35
 */

// 将数组扁平化并去除其中重复数据，
// 最终得到一个升序且不重复的数组
const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9,
  [11, 12, [12, 12, [13] ] ] ],
  10
];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

Array.prototype.myFlat = function() {
  const result = this.map((item) => {
    if(Array.isArray(item)) {
      return item.myFlat()
    }
    return [item]
  })
  return [].concat(...result)
}
Array.prototype.unique = function() {
  return [...new Set(this)]
}
const sortFn = (a, b) => a-b

const res = arr.myFlat().unique().sort(sortFn)
console.log(res);