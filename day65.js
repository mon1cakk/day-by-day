/*
 * @Author: LeslieChen 
 * @Date: 2022-08-17 21:39:52 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-18 01:41:55
 */

//类数组转化为数组的方法

const arrayLike = document.querySelectorAll('div')

// 1.扩展运算符
//[...arrayLike]
// 2.Array.from
Array.from(arrayLike)
// 3.Array.prototype.slice
Array.prototype.slice.call(arrayLike)
// 4.Array.apply
Array.apply(null, arrayLike)
// 5.Array.prototype.concat
Array.prototype.concat.apply([], arrayLike)
