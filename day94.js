/*
 * @Author: LeslieChen 
 * @Date: 2022-12-29 23:30:05 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-12-29 23:34:20
 */

//使用Promise实现每隔1秒输出1,2,3
const arr = [1, 2, 3];
arr.reduce((p, x) => p.then(() => new Promise(r => setTimeout(() => r(console.log(x)), 1000))), Promise.resolve())