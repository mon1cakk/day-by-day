/*
 * @Author: LeslieChen 
 * @Date: 2023-03-18 23:02:17 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-22 02:00:08
 */

//实现一个LazyMan，可以按照以下方式调用
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi This is ${name}`);
      this.next();
    }
    this.tasks.push(task);
    setTimeout(() => {
      this.next()
    }, 0);
  }

  next() {
    const task = this.tasks.shift();
    task && task();
  }

  sleep(time) {
    this.sleepWrapper(time, false);
    return this
  }

  sleepFirst(time) {
    this.sleepWrapper(time, true);
    return this
  }

  sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next();
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }

  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

new LazyMan('hank').eat('super').sleepFirst(5)