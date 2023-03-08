/*
 * @Author: LeslieChen 
 * @Date: 2023-03-09 00:53:40 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-09 01:12:16
 */

//S 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.maxCounts = limit;
    this.runCounts = 0;
  }

  add(time, task) {
    const runner = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(task)
          resolve();
        }, time)
      })
    }
    this.queue.push(runner);
  }

  taskStart() {
    for(let i = 0 ; i < this.maxCounts ; i++) {
      this.request();
    }
  }

  request() {
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCounts) return
    this.runCounts++
    this.queue.shift()().then(() => {
      this.runCounts--
      this.request();
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