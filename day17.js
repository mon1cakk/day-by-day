/*
 * @Author: LeslieChen 
 * @Date: 2022-06-19 14:59:57 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-06-19 15:19:58
 */

// 判断两个数组是否相等
// 前提: 数组可能出现嵌套，每层数组的元素都是简单数据类型
// 判断相等条件: 数组元素顺序和每层元素的值是相同的
// a1 = [1]
// a2 = ['1']  // false

// a1 = [1, 2]
// a2 = [1, [2]]; // false

// a1 = [1, 2, 3, 4]
// a2 = [1, 2, 3, 4] // true

// a1 = ['a', ['b', ['c']], 'd']
// a2 = ['a', ['b', ['c']], 'd']  // true

function sameArray(arr1, arr2) {
  if(!arr1 || !arr2) return false
  if(arr1.length !== arr2.length) return false
  for(let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if(!sameArray(arr1[i], arr2[i])) return false
    }else {
      if(arr1[i] !== arr2[i]) return false
    }
  }
  return true
}

a1 = [1, 2]
a2 = [1, [2]]; // false

a3 = ['a', ['b', ['c']], 'd']
a4 = ['a', ['b', ['c']], 'd']  // true
console.log(sameArray(a1, a2));
console.log(sameArray(a3, a4));