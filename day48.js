/*
 * @Author: LeslieChen 
 * @Date: 2022-07-28 23:22:21 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-30 17:54:03
 */

//实现一个函数 groupBy

// _.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
// _.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

//简单处理，如何category过多可以使用设计模式优化
function groupBy(groupArr, category) {
  const newMap = {};
  groupArr.forEach(item => {
    if(category === Math.floor) {
      const newItem = Math.floor(item);
      if(newMap[newItem]) {
        newMap[newItem].push(item);
      }else {
        newMap[newItem] = [item];
      }
    }else {
      const length = item.length;
      if(newMap[length]) {
        newMap[length].push(item);
      }else {
        newMap[length] = [item];
      }
    }
  })
  return newMap
}

const result1 = groupBy([6.1, 4.2, 6.3], Math.floor);
const result2 = groupBy(['one', 'two', 'three'], 'length');

console.log('777', result1);
console.log('888', result2);