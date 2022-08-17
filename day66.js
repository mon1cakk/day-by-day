/*
 * @Author: LeslieChen 
 * @Date: 2022-08-18 01:44:34 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-18 02:29:47
 */

//洗牌算法
const arr = [];
for(let i = 1 ; i < 55 ; i++) {
  arr.push(i);
}
let count = 0;

// const shuffle = (arr) =>  {
//   let shuffleArr = [];
//   while(shuffleArr.length < arr.length) {
//     count++
//     let rand = randOne();
//     if (shuffleArr.includes(rand)) {
//       rand = randOne();
//     } else {
//       shuffleArr.push(rand);
//     }
//   }
//   return shuffleArr
// }

// const randOne = () => {
//   return Math.floor(Math.random() * 54) + 1
// }

const shuffle = (arr) => {
  const shuffleArr = arr.slice(0);
  let len = shuffleArr.length;
  while(len > 1) {
    count++
    let rand = Math.floor(Math.random() * len);
    len--
    let temp = shuffleArr[len];
    shuffleArr[len] = shuffleArr[rand];
    shuffleArr[rand] = temp
  }
  return shuffleArr
}

console.log('777', shuffle(arr))
console.log('xxx', count)