/*
 * @Author: LeslieChen 
 * @Date: 2022-07-09 15:13:09 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-09 16:10:59
 */

//如何防止重复发送多个请求？
/**
 * 在我们的工作中，经常需要只发送一次请求，以防止用户重复点击。
 * 请编写请求方法（执行后返回 promise）并返回一个新方法。当连续触发时，将只发送一个请求。
 */

function firstPromise (promiseFunction) {
  // ...Please fill in here
  let p = null;
  return function(...args) {
    return p? p: ((p = promiseFunction.apply(this, args).finally(() => (p = null))))
  }
}
let count = 1;
let promiseFunction = () =>
  new Promise(rs =>
    setTimeout(() => {
      rs(count++)
    }, 1000)
  )
let firstFn = firstPromise(promiseFunction)
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
firstFn().then(console.log) // 1
setTimeout(() => {
  firstFn().then(console.log) // 2
  firstFn().then(console.log) // 2
  firstFn().then(console.log) // 2
}, 3000)