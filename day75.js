/*
 * @Author: LeslieChen 
 * @Date: 2022-09-24 18:51:38 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-09-24 19:32:17
 */

//判断是否为质数
const isPrime = (n) => {
  if (n <= 1) return false
  if (n === 2) return true
  for(let i = 2 ; i <= n / 2 ; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(3))

//打印1-100之间的质数
const res = [];
for(let j = 1 ; j <= 100 ; j++) {
  if (isPrime(j)) {
    res.push(j);
  }
}
console.log(res)