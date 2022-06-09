/**
 * 统计 1 ~ n 整数中出现 1 的次数
 * 1 - 10 [1, 10] => 2
 * 1 - 20 [1 10 11 12 13 14...19] => 12
 */

function numberOneCount(n) {
  return Array.from({ length: n })
  .map((v, i) => i + 1)
  .reduce((pre, cur) => {
    // const curCount = String(cur).match(/1/g)?.length || 0;
    const curCount = String(cur).split('').filter(i => i === '1').length;
    return pre + curCount;
  }, 0);
}
console.log(numberOneCount(10));
console.log(numberOneCount(20));