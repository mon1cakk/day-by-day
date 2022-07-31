/*
 * @Author: LeslieChen 
 * @Date: 2022-07-31 11:43:15 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-31 11:50:06
 */

//FizzBuzz，是否能被 3 或 5 整除
// 输入一个整数，如果能够被 3 整除，则输出 Fizz

// 如果能够被 5 整除，则输出 Buzz

// 如果既能被 3 整数，又能被 5 整除，则输出 FizzBuzz

//=> 'fizz'
// fizzbuzz(3);

//=> 'buzz'
// fizzbuzz(5);

//=> 'fizzbuzz'
// fizzbuzz(15);

//=> 7
// c(7);

function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz'
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'buzz'
  } else {
    return n
  }
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(7));
