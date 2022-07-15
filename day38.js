/*
 * @Author: LeslieChen 
 * @Date: 2022-07-14 22:31:44 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-16 00:42:38
 */

//实现一个sleep函数
const sleep = (func, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, delay)
  })
}

const consoleStr = (str) => {
  return () => {
    console.log(str);
    return str
  }
}

const doFns = async () => {
  const name = await sleep(consoleStr('测试7777'), 1000)
  const sex = await sleep(consoleStr('boy'), 1000)
  const age = await sleep(consoleStr(100), 1000)

  console.log(name, sex, age)
}

doFns()