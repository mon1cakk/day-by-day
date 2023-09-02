/*
 * @Author: LeslieChen 
 * @Date: 2023-04-23 07:58:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-09-02 19:53:43
 */

//new 操作符
// function myNew(fn, ...args) {
//   let obj = Object.create(fn.prototype);
//   let res = fn.apply(obj, args);
//   if (res && (typeof res === 'object' || typeof res === 'function')) {
//     return res
//   }
//   return obj
// }
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function() {
//   console.log(this.age);
// };
// let p1 = myNew(Person, "lihua", 18);
// console.log(p1.name);
// console.log(p1);
// p1.say();

const arr =[
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  }
]

function listToTree(data) {
  let temp = {};
  let treeData = [];
  for (let i = 0; i < data.length; i++) {
    temp[data[i].id] = data[i];
  }
  console.log('777',temp)
  for (let i in temp) {
    if (+temp[i].parentId != 0) {
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = [];
      }
      temp[temp[i].parentId].children.push(temp[i]);
    } else {
      treeData.push(temp[i]);
    }
  }
  return treeData;
}
console.log(listToTree(arr))