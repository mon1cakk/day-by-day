/*
 * @Author: LeslieChen 
 * @Date: 2022-08-25 00:06:49 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-26 00:13:23
 */

//实现深拷贝（考虑到复制 Symbol 类型）

function isObject(val) {
  return typeof val === 'object' && val !== null
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  let target = Array.isArray(val) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((item) => {
    if (isObject(item)) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  })
  return target
}