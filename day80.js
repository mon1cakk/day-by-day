/*
 * @Author: LeslieChen 
 * @Date: 2022-10-05 20:19:47 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-10-05 20:23:33
 */

/**
 * Promise实现一个红绿灯
 */

const timer = (color, time) => {
  return new Promise((resolve, reject) => {
    console.log(color);
    setTimeout(() => {
      resolve();
    }, time * 1000);
  })
}

async function light() {
  await timer('red', 7)
  await timer('yellow', 2)
  await timer('green', 5)
  light()
}

light()