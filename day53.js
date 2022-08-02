/*
 * @Author: LeslieChen 
 * @Date: 2022-08-01 22:02:28 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-03 01:45:48
 */

//对以下字符串进行压缩编码

//=> a4b3c2
// encode("aaaabbbcc");

//=> a4b3a4
// encode("aaaabbbaaaa");

//=> a2b2c2
// encode("aabbcc");

function encode(str) {
  const res = [];
  for(let s of str) {
    const length = res.length;
    const lastChar = length > 0 ? res[length - 1][0] : undefined;
    if (lastChar === s) {
      res[length - 1][1]++
    } else {
      res.push([s, 1])
    }
  }
  return res.map((x) => x.join('')).join('')
}

console.log(encode("aaaabbbcc"));
console.log(encode("aaaabbbaaaa"));
console.log(encode("aabbcc"));

