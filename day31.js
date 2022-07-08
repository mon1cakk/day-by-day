/*
 * @Author: LeslieChen 
 * @Date: 2022-07-08 23:21:41 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-09 00:33:13
 */

//实现一个有效期的localStorage
class Storage {
  constructor() {
    this.name = 'storage';
  }
  set(key, value, expires) {
    const obj = {
      value,
      expires,
      startTime: new Date().getTime()
    }
    if(obj.expires) {
      localStorage.setItem(key, JSON.stringify(obj))
    }else {
      localStorage.setItem(key, JSON.stringify(obj.value))
    }
  }
  get(key) {
    const temp = localStorage.getItem(key);
    if(temp.expires) {
      const date = new Date().getTime();
      if(date - temp.startTime > temp.expires) {
        localStorage.removeItem(key)
        return
      }else {
        return temp.value
      }
    }else {
      return temp
    }
  }
}