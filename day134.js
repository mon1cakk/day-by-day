/*
 * @Author: LeslieChen 
 * @Date: 2023-04-01 07:16:14 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-01 07:24:16
 */

//将虚拟 Dom 转化为真实 Dom
function render(vNode) {
  if (typeof vNode === 'number') {
    vNode = String(vNode);
  }
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }
  let dom = document.createElement(vNode.tag);
  if (vNode.attrs) {
    Object.keys(vNode.attrs).forEach((key) => {
      const val = vNode.attrs[key];
      dom.setAttribute(key, val);
    })
  }
  vNode.children.forEach((child) => dom.appendChild(render(child)));
  return dom
}