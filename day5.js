/**
 * 大数相加
 * 实现一个add方法完成两个大数相加
 */

 let a = "9007199254740991";
 let b = "1234567899999999999";
 
 function add(a ,b){
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength , 0);//"0009007199254740991"
    b = b.padStart(maxLength , 0);//"1234567899999999999"
    let res = 0;
    let carry = 0;
    let sum = '';
    for(let i = maxLength - 1; i >= 0; i--) {
      res = parseInt(a[i]) + parseInt(b[i]) + carry;
      carry = Math.floor(res / 10);
      sum = res%10 + sum;
    }
    if(carry !== 0) {
      sum = carry + sum
    }
    return sum
 }
 console.log(add(a, b))
