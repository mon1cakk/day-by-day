/*
 * @Author: LeslieChen 
 * @Date: 2022-08-21 18:45:18 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-23 21:47:58
 */

//请实现 异步加法 asyncAdd

// 异步加法
function asyncAdd(a,b,cb){
  setTimeout(() => {
    cb(null, a + b)
  }, Math.random() * 1000)
}

async function total(){
  const res1 = await sum(1,2,3,4,5,6,4)
  const res2 = await sum(1,2,3,4,5,6,4)
  return [res1, res2]
}

total()

// 实现下 sum 函数。注意不能使用加法，在 sum 中借助 asyncAdd 完成加法。尽可能的优化这个方法的时间。
async function sum(...nums){
  let res = 0;
  for(let n of nums) {
    res = await caculate(res, n);
  }
  return res
}

function caculate(num1, num2) {
  return new Promise((resolve, reject) => {
    asyncAdd(num1, num2, (err, res) => {
      if (err) {
        reject(err)
        return
      }
      resolve(res)
    })
  })
}