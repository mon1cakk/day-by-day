/*
 * @Author: LeslieChen 
 * @Date: 2022-08-15 19:13:32 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-16 22:05:06
 */

// 手写 call apply bind 实现

Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  //不传参数就默认window
  context = context || window;
  //保存this
  context.fn = this;
  //保存参数
  let args = Array.from(arguments).slice(1);
  //调用函数
  let result = context.fn(...args);
  delete context.fn
  return result
}

Function.prototype.myApply = function (context) {
  // 判断this是不是函数
  if (typeof this !== "function") {
    throw new TypeError("Not a Function")
  }

  let result

  // 默认是window
  context = context || window

  // 保存this
  context.fn = this

  // 是否传参
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn

  return result
}

Function.prototype.myBind = function(context){
  // 判断是否是一个函数
  if(typeof this !== "function") {
    throw new TypeError("Not a Function")
  }
  // 保存调用bind的函数
  const _this = this 
  // 保存参数
  const args = Array.prototype.slice.call(arguments,1)
  // 返回一个函数
  return function F () {
    // 判断是不是new出来的
    if(this instanceof F) {
      // 如果是new出来的
      // 返回一个空对象，且使创建出来的实例的__proto__指向_this的prototype，且完成函数柯里化
      return new _this(...args,...arguments)
    }else{
      // 如果不是new出来的改变this指向，且完成函数柯里化
      return _this.apply(context,args.concat(...arguments))
    }
  } 
}
