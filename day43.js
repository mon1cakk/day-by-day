/*
 * @Author: LeslieChen 
 * @Date: 2022-07-21 21:03:49 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-21 23:42:58
 */

// 根据id递归找到树结构符合的值并计算得到完整链路
const data = [
  {
    id: '1000',
    name: '深圳',
    children: [
      {
        id: '1001',
        name: '宝安',
        children: []
      },
      {
        id: '1002',
        name: '南山',
        children: [
          {
            id: '1012',
            name: '粤海街道',
            children: [
              {
                id: '1112',
                name: '阿里中心',
                children: []
              },
              {
                id: '1212',
                name: '深圳湾人才公园',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2000',
    name: '广州',
    children: [
      {
        id: '2001',
        name: '越秀区',
        children: [
          {
            id: '2011',
            name: '人民公园'
          }
        ]
      },
      {
        id: '2002',
        name: '天河区',
        children: []
      }
    ]
  }
];

function find(data, id) {
  let arr = data;
  while(arr.length) {
    let temp = arr.shift();
    if (temp.id === id) return temp.name;
    if(temp.children) {
      arr = [...arr, ...temp.children]
    }
  }
  return null;
}

console.log(find(data, '1212'))