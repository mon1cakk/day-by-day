/**
 *  快乐数
 */

 示例:
 输入: 19
 输出: true
//  解释:
//  1^2 + 9^2 = 82
//  8^2 + 2^2 = 68
//  6^2 + 8^2 = 100
//  1^2 + 0^2 + 0^2 = 1

function handleFn(n, once) {
  // 判断是否进入死循环
  if(once[n]) {
    return false
  }
  const list = n.toString().split('');
  once[n] = true;
  let result = 0;
  list.forEach((item) => {
    result += Math.pow(parseInt(item, 10), 2);
  })
  if(result === 1) {
    return true
  }else {
    return handleFn(result, once)
  }
}

const isHappy = function(n) {
  const once = {}
  return handleFn(n, once)
}