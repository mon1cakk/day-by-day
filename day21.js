/*
 * @Author: LeslieChen 
 * @Date: 2022-06-21 02:58:20 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-06-21 21:59:27
 */

const a = {
  val: 0,
  valueOf: () => {
    a.val++
    return a.val
  },
}

if (a == 1 && a == 2 && a == 3) {
  console.log('Are you kidding me?');
}

const x = {
  val: 0,
  toString: () => {
    x.val++
    return x.val
  },
}

if (x == 1 && x == 2 && x == 3) {
  console.log('Can i speak Chinese?');
}