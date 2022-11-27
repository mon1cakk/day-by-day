/*
 * @Author: LeslieChen 
 * @Date: 2022-11-27 19:51:17 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-27 19:57:35
 */

//产生一个不重复的随机数组
const randomUniqueArr = (len = 77, min = 0, max = 100) => {
  if (max - min < len) return []
  const res = [];
  while(res.length < len) {
    const temp = Math.floor(Math.random() * max);
    if (temp < min) continue
    if (!res.includes(temp)) {
      res.push(temp);
    }
  }
  return res
}
console.log(randomUniqueArr())