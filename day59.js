/*
 * @Author: LeslieChen 
 * @Date: 2022-08-09 23:06:04 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-10 22:35:44
 */

//判断对象是否存在循环引用
const a = {
  a: 1,
  c: 3
}
  
const b = {
  a: a,
  c: 3
}
a.b = b;

function isCycleReference(value) {
  const isObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]"
  }
  const memory = new WeakMap();
  let isCycle = false;
  function traverse(value) {
    if(isObject(value)) {
      if (memory.has(value)) {
        isCycle = true;
        return;
      }
      memory.set(value, true);
      const keys = Object.keys(value);
      for (const key of keys) {
        traverse(value[key]);
      }
    }
  }
  traverse(value);
  return isCycle
}

console.log('777', isCycleReference(a), a)