let numberStr = '10,11,14'
// 把 10,11,14 变成这样 ==>[[1,10],[1,11],[2,5,14]]
let data = [
  {
    value: 1,
    children: [
      {
        value: 10,
      },
      {
        value: 11,
      },
    ],
  },
  {
    value: 2,
    children: [
      {
        value: 5,
        children: [
          {
            value: 14,
          }
        ],
      },
    ],
  },
]

// function handleData(data, result) {
//   for(let key of data) {
//     const res = []
//     const { value, children } = key
//     if(children.length > 1) {
      
//     }
//     result.push(res)
//   }
//   return result
// }
// const res = handleData(data,[]);
// console.log(res)

function treeToArray(tree) {
  const result = []
  for(let key of tree) {
    const { value, children } = key
    if(children.length > 1) {
      for(let item of children) {
        result.push([value, item.value])
      }
    }else {
      const res = []
      for(let item of children) {
        res.push(value, item.value)
        if(item.children && item.children.length) {
          for(let k of item.children) {
            const { value } = k
            res.push(value)
          }
        }
      }
      result.push(res)
    }
  }
  return result
}
let res = treeToArray(data);
console.log(res);