/*
 * @Author: LeslieChen 
 * @Date: 2022-07-19 22:46:53 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-20 00:33:22
 */

// 实现一个函数，判断一组数字是否连续。当出现连续数字的时候以‘-’输出
// 腾讯面试题目
// 如： const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]
// 期望结果：["2-4", "7-10", 13, 15]

// function nextNumber(arr) {
//   let slow = 0;
//   let fast = 1;
//   const length = arr.length;
//   const result = [];
//   while(fast < length) {
//     if(arr[fast] - arr[fast - 1] > 1) {
//       if(fast - slow > 2) {
//         result.push(`${arr[slow]}-${arr[fast - 1]}`);
//       }else{
//         result.push(arr[slow]);
//       }
//       slow = fast;
//       fast++;
//     }else {
//       fast++;
//     }
//   }
//   if(fast === length && arr[fast - 1] - arr[fast - 2] > 1) {
//     result.push(arr[fast - 1]);
//   }
//   return result
// }
// const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15];
// console.time()
// console.log(nextNumber(arr));
// console.timeEnd()

const merge = (arr) => {
  const lens = arr.length;
  const result = []
  let prev = 0, next = 1;
  while (prev < lens) {
      const diffIndex = next - prev;
      if (arr[prev] + diffIndex === arr[next]) { // 连续
          next++;
      } else { // 不连续
          if (diffIndex === 1) { // 单个
              result.push(arr[prev]);
          } else {
              result.push(`${arr[prev]}-${arr[next - 1]}`)
          }
          prev = next;
          next++;
      }
  }
  return result;
}
const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]
console.time();
console.log(merge(arr))
console.timeEnd();
