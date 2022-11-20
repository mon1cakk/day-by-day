/*
 * @Author: LeslieChen 
 * @Date: 2022-10-04 20:40:37 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-10-04 20:45:14
 */

//九九乘法表
for(let i = 1 ; i <= 9 ; i++) {
  let res = '';
  for(let j = 1 ; j <= i ; j++) {
    res += `${j} * ${i} = ${j * i} \t`
  }
  console.log(res);
} 