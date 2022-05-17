/**
 *  题目：给定一个整数N，那么N的阶乘N！末尾有多少个0呢？
    例如：N＝10，N！＝3 628 800，N！的末尾有两个0
 */

    function factorial(n) {
      let count = 0;
      while(n > 0) {
        n = parseInt(n / 5);
        count += n;
      }
      return count
    }
    
    const res = factorial(5)
    const res1 = factorial(3)
    const res2 = factorial(8)
    const res3 = factorial(10)
    console.log(res)
    console.log(res1)
    console.log(res2)
    console.log(res3)