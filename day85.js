/*
 * @Author: LeslieChen 
 * @Date: 2022-11-23 00:55:01 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-23 01:25:33
 */

//arr2tree
let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

// const arr2tree = (root, id, list) => {
//   for(let item of root) {
//     if (item.pid === id) {
//       list.push(item);
//     }
//   }
//   for(let i of list) {
//     i.children = [];
//     arr2tree(root, i.id, i.children);
//     if (i.children.length === 0) {
//       delete i.children
//     }
//   }
//   return list
// }
// console.log('res',arr2tree(arr, 0, []))

const arr2tree1 = (arr) => {
  const itemMap = {};
  const res = [];
  for(let i = 0 ; i < arr.length ; i++) {
    const {pid, id} = arr[i];
    if (!itemMap[id]) {
      itemMap[id] = {children: []};
    }
    itemMap[id] = {...arr[i], children: itemMap[id].children}
    if (pid === 0) {
      res.push(itemMap[id]);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {children: []};
      }
      itemMap[pid].children.push(itemMap[id])
    }
  }
  return res
}
console.log('xxx',arr2tree1(arr))
