/*
 * @Author: LeslieChen 
 * @Date: 2022-08-01 01:22:53 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-01 21:58:47
 */

//实现一个函数 maxBy，根据给定条件找到最大的数组项

const data = [{ value: 6 }, { value: 2 }, { value: 4 }];
const data1 = [{ value: 6 }, { value: 2 }, { value: 4 }, { value: 6 }];

//=> { value: 6 }
// maxBy(data, (x) => x.value);

//返回单个的情况
const keyBy = x => x.value
const maxBy = (arr, keyBy) =>
  arr.reduce((x, y) => (keyBy(x) > keyBy(y) ? x : y));

console.log(maxBy(data, keyBy))

//返回多个的情况
const maxBy1 = (list, keyBy) => {
  return list.slice(1).reduce(
    (acc, x) => {
      if (keyBy(x) > keyBy(acc[0])) {
        return [x];
      }
      if (keyBy(x) === keyBy(acc[0])) {
        return [...acc, x];
      }
      return acc;
    },
    [list[0]]
  )
}

console.log(maxBy1(data1, keyBy))
