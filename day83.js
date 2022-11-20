/*
 * @Author: LeslieChen 
 * @Date: 2022-11-20 19:39:28 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-20 19:53:34
 */

//JSON2DOM = react的render函数

// {
//   tag: 'DIV',
//   attrs:{
//   id:'app'
//   },
//   children: [
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] }
//       ]
//     },
//     {
//       tag: 'SPAN',
//       children: [
//         { tag: 'A', children: [] },
//         { tag: 'A', children: [] }
//       ]
//     }
//   ]
// }
// 把上诉虚拟Dom转化成下方真实Dom
// {/* <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div> */}

const render = (vNode) => {
  if (typeof vNode === 'number') {
    vNode = String(vNode);
  }
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }
  const dom = document.createElement(vNode.tag);
  if (vNode.attrs) {
    Object.keys(vNode.attrs).forEach((key) => {
      const val = vNode.attrs[key];
      dom.setAttribute(key, val);
    })
  }
  //子数组递归操作
  vNode.children.forEach((child) => dom.appendChild(render(child)));
  return dom
}