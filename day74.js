/*
 * @Author: LeslieChen 
 * @Date: 2022-09-24 18:44:38 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-09-25 23:53:11
 */

/**
 * lazyMan
 * 
 * LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony')
  .sleep(10)
  .eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony')
  .eat('lunch')
  .sleep(10)
  .eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(10)
  .eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
*/

class lazyMan {
  constructor(name) {
    console.log(`hi i am ${name}`);
    this.taskList = [];
    setTimeout(() => {
      this.next();
    }, 0)
  }
  eat(name) {
    const task = () => {
      console.log(`i am eating ${name}`);
      this.next();
    }
    this.taskList.push(task);
    return this
  }
  sleep(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time * 1000)
    }
    this.taskList.push(task);
    return this
  }
  sleepFirst(time) {
    const task = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`);
        this.next();
      }, time * 1000)
    }
    this.taskList.unshift(task);
    return this
  }
  next() {
    const fn = this.taskList.shift();
    fn && fn()
  }
}

function lazyManClass(name) {
  return new lazyMan(name)
}
lazyManClass('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(10)
  .eat('junk food');