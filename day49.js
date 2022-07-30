/*
 * @Author: LeslieChen 
 * @Date: 2022-07-30 17:55:16 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-30 18:26:53
 */

//随机生成六位数的手机验证码(重复/不可重复)

const random = (n) => Math.floor(Math.random() * (n + 1));

//重复的
const randomCode = () => {
  return [0, 0, 0, 0, 0, 0].fill(random(9))
}

//不重复的
const sortArr = (list) => list.sort((a, b) => Math.random() - 0.5);
const randomUniqueCode = () => {
  return sortArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
}

//笨方法
function randomUniqueCode1() {
  let count = 0;
  const result = [];
  while(count < 6) {
    const item = random(9);
    if(!result.includes(item)) {
      count++
      result.push(item);
    }
  }
  return result
}

console.log(randomCode())
console.log(randomUniqueCode())
console.log(randomUniqueCode1())