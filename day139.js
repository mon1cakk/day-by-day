/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 07:38:47 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-23 07:42:58
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
}
function Child(name) {
  Parent.call(this);
  this.name = name;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let child = new Child("111");
console.log(child.name);
child.say();
child.play();