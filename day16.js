/**
 * 创建一个分组元素数组
 * 
 * 输入: 多个一维数组，元素个数不定
 * 输出: 二维数组，每个数组元素由一维数组的相同索引位构成
 * 
 * 示例1:
 * 输入: ['a', 'b'], [1, 2], [true, false]
 * 输出: [['a', 1, true], ['b', 2, false]]
 * 
 * 示例2:
 * 输入: ['a'], [1, 2], [true, false]
 * 输出: [['a', 1, true], [undefined, 2, false]]
 */

 function getArray(...arrays) {
  const result = [];
  const maxLength = Math.max(...arrays.map(i => i.length));
  for (let i = 0; i < maxLength; i++) {
    let temp = [];
    for (let j = 0; j < arrays.length; j++) {
      temp[j] = arrays[j][i];
    }
    // ['a'], [1, 2], [true, false]
    // temp -> ['a', 1, true]
    result.push(temp);
  }
  return result;
}
getArray(['a'], [1, 2], [true, false]);
getArray(['a', 'b'], [1, 2], [true, false]);

function getArray2(...arrays) {
  const maxLength = Math.max(...arrays.map(i => i.length));
  return Array.from({ length: maxLength })
    .map((v, i) => {
      return Array.from({ length: arrays.length })
        .map((v2, k) => {
          return arrays[k][i];
        });
    });
}

const res1 = getArray2(['a'], [1, 2], [true, false]);
const res2 = getArray2(['a', 'b'], [1, 2], [true, false]);
console.log(res1);
console.log(res2);