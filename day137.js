/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 06:56:45 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 07:19:03
 */

//实现一个发布订阅模式拥有 on emit once off 方法
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }

  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
  }

  off(type, callback) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter(item => item !== callback)
  }

  once(type, callback) {
    const fn = () => {
      callback();
      this.off(type, fn);
    }
    this.on(type, fn);
  }
}

const even = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

even.on("click", handle);

even.emit("click", 1, 2, 3, 4);

even.off("click", handle);

even.emit("click", 1, 2);

even.once("dbClick", () => {
  console.log(123456);
});
even.emit("dbClick");
even.emit("dbClick");