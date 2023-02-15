/*
 * @Author: LeslieChen 
 * @Date: 2023-02-15 23:50:08 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-16 00:26:51
 */

//手写bind函数
Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== "function") {
    throw new TypeError("Not a Function")
  }
  context = context || window;
  let fn = Symbol('fn');
  context[fn] = this;
  let that = this;
  const result = function (...innerArgs) {
    if (this instanceof that) {
      this[fn] = that;
      this[fn](...args, ...innerArgs)
    } else {
      context[fn](...args, ...innerArgs)
    }
  }
  result.prototype = Object.create(this.prototype);
  return result
}

function Person(name, age) {
  console.log(name); //'我是参数传进来的name'
  console.log(age); //'我是参数传进来的age'
  console.log(this); //构造函数this指向实例对象
}
// 构造函数原型的方法
Person.prototype.say = function() {
  console.log(123);
}
let obj = {
  objName: '我是obj传进来的name',
  objAge: '我是obj传进来的age'
}
// 普通函数
function normalFun(name, age) {
  console.log(name);   //'我是参数传进来的name'
  console.log(age);   //'我是参数传进来的age'
  console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
  console.log(this.objName); //'我是obj传进来的name'
  console.log(this.objAge); //'我是obj传进来的age'
}

//先测试作为构造函数调用
let bindFun = Person.myBind(obj, '我是参数传进来的name')
let a = new bindFun('我是参数传进来的age')
a.say() //123

//再测试作为普通函数调用
let bindFun1 = normalFun.myBind(obj, '我是参数传进来的name')
bindFun1('我是参数传进来的age')