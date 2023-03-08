/*
 * @Author: LeslieChen 
 * @Date: 2023-02-19 12:10:10 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-19 17:20:14
 */

//实现一个发布订阅模式拥有 on emit once off 方法
class EventEmitter {
  constructor() {
    this.events = {};
  }

  //实现订阅
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }

  //删除订阅
  off(type, callback) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter(item => {
      return item !== callback;
    })
  }

  //只执行一次订阅
  once(type, callback) {
    const fn = () => {
      callback();
      this.off(type, callback);
    }
    this.on(type, fn);
  }

  //触发事件
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
  }
}

const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");