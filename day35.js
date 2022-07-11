/*
 * @Author: LeslieChen 
 * @Date: 2022-07-11 11:38:46 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-11 12:18:06
 */

//题目描述:实现一个发布订阅模式拥有 on emit once off 方法

class EventEmitter {
  constructor() {
    this.events = [];
  }
  //实现订阅
  on(type, callBack) {
    if(!this.events[type]) {
      this.events[type] = [callBack]
    }else {
      this.events[type].push(callBack);
    }
  }
  //删除订阅
  off(type, callBack) {
    if(!this.events[type]) return
    this.events[type] = this.events[type].filter(item => {
      return item !== callBack
    })
  }
  //只执行一次
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn)
    }
    this.on(type, fn);
  }
  //触发执行
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach((fn) => {
      fn.apply(this, rest);
    })
  }
}

// 使用如下
const event = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456, '777');
});
event.emit("click");
event.emit("dbClick");