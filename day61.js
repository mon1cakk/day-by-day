/*
 * @Author: LeslieChen 
 * @Date: 2022-08-11 23:35:39 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-14 12:10:49
 */

//tree2list

const obj = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid:4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]

/**
 * 递归版本
*/
function treeToArray(tree) {
  let res = [];
  for(let item of tree) {
    let { children, ...i } = item;
    if(children&&children.length) {
      res = res.concat(treeToArray(children));
    }
    res.push(i);
  }
  return res
}

function treeToArray1(tree) {
  return tree.reduce((res, item) => {
    const { children, ...i } = item
    return res.concat(i, children && children.length ? treeToArray(children) : [])
  }, [])
}

let result = treeToArray(obj);
let result1 = treeToArray1(obj);
console.log(result);
console.log(result1);