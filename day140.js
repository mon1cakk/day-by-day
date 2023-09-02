/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 07:50:20 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 07:57:24
 */

//JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0
  }

  add(time, order) {
    const run = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order);
          resolve()
        }, time)
      })
    }
    this.queue.push(run);
  }

  taskStart() {
    for(let i = 0 ; i < this.maxCount ; i++) {
      this.request();
    }
  }

  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) return
    this.runCounts++
    this.queue.shift()().then(() => {
      this.runCounts--
      this.request()
    })
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();