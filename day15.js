/**
 * Promise实现一个红绿灯
 */

function timer(color, timer) {
  return new Promise((resolve, reject) => {
    console.log(color);
    setTimeout(() => {
      resolve();
    }, timer * 1000)
  })
}

async function light() {
  await timer('red', 5);
  await timer('green', 3);
  await timer('yellow', 2);
  await light();
}

light()