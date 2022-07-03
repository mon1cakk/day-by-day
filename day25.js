/*
 * @Author: LeslieChen 
 * @Date: 2022-06-29 07:54:23 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-02 18:29:11
 */

//千分位分隔符(不用正则表达式)

const str1 = '123456789';
const str2 = '1234567.89';
const str3 = '1234567';

function thousandSeparate(str) {
  let numb = '';
  let dot = '';
  if(str.indexOf('.') > -1) {
    numb = str.substring(0, str.indexOf('.'));
    dot = str.substring(str.indexOf('.'))
  }else {
    numb = str
  }
  // numb = numb.split('');
  let count = 0;
  const res = [];
  for(let i = numb.length -1;i >= 0; i--) {
    res.unshift(numb[i]);
    count++
    if(count % 3 === 0 && i !== 0) {
      res.unshift(',');
    }
  }
  return res.join('') + dot
}
console.log(thousandSeparate(str1))
console.log(thousandSeparate(str2))
console.log(thousandSeparate(str3))

//千分位分隔符(正则匹配)  没有处理小数情况
function thousandSeparate1(str) {
  // \B是匹配非单词边界   ?=是先行断言
  return str.replace(/(?=(\B\d{3})+$)/g, ',')
}
console.log(thousandSeparate1(str1))
// console.log(thousandSeparate1(str2))
console.log(thousandSeparate1(str3))