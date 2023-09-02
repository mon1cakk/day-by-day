/*
 * @Author: LeslieChen 
 * @Date: 2023-03-27 07:16:16 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-27 07:25:13
 */

//实现一个lru算法
class LRUCache {
  constructor(size) {
    this.map = new Map();
    this.size = size;
  }

  get(item) {
    if (this.map.has(item)) {
      const val = this.map.get(item);
      this.map.delete(item);
      this.map.set(item, val);
      return val
    } else {
      return -1
    }
  }

  put(item, val) {
    if (this.map.has(item)) {
      this.map.delete(item);
      this.map.set(item, val);
    } else if (this.map.size < this.size) {
      this.map.set(item, val);
    } else {
      this.map.set(item, val);
      this.map.delete(this.map.keys().next().value);
    }
  }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1))// 返回  1
cache.put(3, 3);// 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
cache.put(4, 4);// 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3))// 返回  3
console.log("cache.get(4)", cache.get(4))// 返回  4