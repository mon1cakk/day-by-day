/*
 * @Author: LeslieChen 
 * @Date: 2022-08-10 22:37:10 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-11 23:34:59
 */

// 实现list2tree函数

let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

//递归版本
const arrayToTree = (array, id = 0, list = []) => {
  for(let item of array) {
    if (item.pid === id) {
      list.push(item);
    }
  }
  for(let i of list) {
    i.children = [];
    arrayToTree(arr, i.id, i.children);
    if (i.children.length === 0) {
      delete i.children
    }
  }
  return list
}

// 非递归版本
const arrayToTree1 = (array) => {
  const itemMap = {}
  let result = []
  for(let item of array) {
    itemMap[item.id] = {...item, children: []};
  }
  for(let i of array) {
    const { id, pid } = i;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem)
    } else {
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}

console.log(arrayToTree(arr))
console.log(arrayToTree1(arr))