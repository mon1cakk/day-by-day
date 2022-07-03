/*
 * @Author: LeslieChen 
 * @Date: 2022-07-02 12:17:41 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-03 11:52:16
 */


//创建长度为n的数组
const arr1 = [];
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
console.log('xxx', arr1);

const arr2 = Array()
arr2[0] = 1
const arr3 = new Array()
arr3[0] = 1
console.log(arr2, arr3);

const length = 3;
const arr4 = new Array(length)
arr4.fill(7)
console.log('777', arr4);

const arr5 = Array.from({length: 7});
arr5.fill(7)
console.log(arr5)

//获取当前时间
const currentTime1 = new Date()
const currentTime2 = Date.now()
console.log('time', currentTime1, currentTime2);