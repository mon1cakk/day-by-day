/*
 * @Author: LeslieChen 
 * @Date: 2023-03-10 00:40:12 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-10 00:49:26
 */

//深拷贝（考虑到复制 Symbol 类型）
function isObject(val)  {
  return typeof val === 'object' && val !== null
}

const deepClone = (obj, map = new WeakMap()) => {
  if (!isObject(obj)) return obj
  if (map.has(obj)) return map.get(obj)
  const target = Array.isArray(obj) ? [] : {};
  map.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(item)) {
      target[item] = deepClone(obj[item], map);
    } else {
      target[item] = obj[item];
    }
  })
  return target
}

var obj1 = {
  a:1,
  b:{a:2}
};
var obj2 = deepClone(obj1);
console.log(obj1);