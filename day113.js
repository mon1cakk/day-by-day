/*
 * @Author: LeslieChen 
 * @Date: 2023-02-21 02:12:33 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-21 02:15:07
 */

//寄生组合继承
function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
Parent.prototype.play = () => {
  console.log(222);
};
function Children(name) {
  Parent.call(this);
  this.name = name;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;

let child = new Children("111");
console.log(child.name);
child.say();
child.play();