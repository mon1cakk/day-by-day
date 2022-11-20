/*
 * @Author: LeslieChen 
 * @Date: 2022-11-20 19:53:48 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-20 20:03:09
 */

//tree2arr
const data = [
  {
    id: 1,
    text: '节点1',
    parentId: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        parentId: 1
      }
    ]
  }
]

const tree2arr = (data) => {
  const res = [];
  const dfs = (data) => [
    data.forEach((item) => {
      res.push(item);
      if (item.children) {
        dfs(item.children);
        delete item.children
      }
    })
  ]
  dfs(data);
  return res
}
console.log(tree2arr(data))