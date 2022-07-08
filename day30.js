/*
 * @Author: LeslieChen 
 * @Date: 2022-07-05 23:53:14 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-08 23:04:52
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

function flatten(obj) {
  const result = {};
  const process = (key, value) => {
    if(Object(value) !== value) {
      if(key) {
        result[key] = value;
      }
    }else if(Array.isArray(value)) {
      for(let i = 0; i < value.length; i++) {
        process(`${key}[${i}]`, value[i]);
      }
      if(value.length === 0) {
        result[key] = [];
      }
    }else {
      const objArr = Object.keys(value);
      objArr.forEach((item) => {
        process(key? `${key}.${item}`: item, value[item]);
      })
      if(key && objArr.length === 0) {
        result[key] = {}
      }
    }
  }
  process('', obj);
  return result
}

console.log(flatten(obj))