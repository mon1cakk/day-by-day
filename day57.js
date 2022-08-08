/*
 * @Author: LeslieChen 
 * @Date: 2022-08-08 00:40:14 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-09 00:55:20
 */

// 小孩报数问题

// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?

function childNum(num, count) {
  const allPlayer = [];
  for(let i = 0; i < num; i++) {
    allPlayer[i] = i + 1;
  }
  let exitPlayer = 0;
  let counter = 0;
  let currIndex = 0;
  while(exitPlayer < num - 1) {
    if(allPlayer[currIndex] !== 0) counter++
    if(counter === count) {
      allPlayer[currIndex] = 0;
      counter = 0;
      exitPlayer++
    }
    currIndex++
    if(currIndex === num) {
      currIndex = 0;
    }
  }
  console.log(allPlayer, '777')
  for(let i = 0; i < num; i++) {
    if(allPlayer[i] !== 0) {
      return allPlayer[i]
    }
  }
}

console.log(childNum(30, 3));