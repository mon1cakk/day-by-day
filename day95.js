/*
 * @Author: LeslieChen 
 * @Date: 2022-12-29 23:46:26 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-12-30 00:43:05
 */

//使用Promise实现红绿灯交替重复亮
const timer = (color, time) => {
  return new Promise((resolve, reject) => {
    console.log(color);
    setTimeout(() => {
      resolve();
    }, time * 1000)
  })
}

async function light() {
  await timer('red', 7)
  await timer('yellow', 2)
  await timer('green', 5)
  light()
}
light()