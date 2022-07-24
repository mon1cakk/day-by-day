/*
 * @Author: LeslieChen 
 * @Date: 2022-07-24 15:35:17 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-24 15:55:03
 */

//统计一个字符串中出现字符最多的字符

const str = 'i am what i am';

const map = new Map();
let maxTag = '';
let maxNum = 0;
const length = str.length;
for(let i = 0; i < length; i++) {
  const temp = str[i];
  let num = map.get(temp);
  if (num) {
    map.set(temp, ++num)
  } else {
    map.set(temp, 1)
  }
  if (num > maxNum) {
    maxNum = num;
    maxTag = temp;
  }
}

console.log('当前字符串中出现次数最多的字符：', maxTag)
console.log('当前字符串中出现次数最多的字符的次数：', maxNum)