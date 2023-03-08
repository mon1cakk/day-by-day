/*
 * @Author: LeslieChen 
 * @Date: 2023-02-19 17:20:24 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-19 17:24:59
 */

//对象数组去重
let arr = [
  {
      key:'1',
      name:'林青霞'
  },
  {
      key:'2',
      name:'张三丰'
  },
  {
      key:'1',
      name:'段誉'
  },
]

const unique = (arr) => {
  const map = new Map();
  const ans = [];
  arr.forEach(item => {
    if (!map.has(item.key)) {
      map.set(item.key, 1);
      ans.push(item);
    }
  })
  return ans
}

console.log(unique(arr))