/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 23:32:27 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 23:37:34
 */

//交换a，b的值，不能用临时变量
let a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

let x = 1, y = 3;
const temp = x;
x = y;
y = temp;
console.log(x, y);