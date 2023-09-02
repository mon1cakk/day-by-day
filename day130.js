/*
 * @Author: LeslieChen 
 * @Date: 2023-03-27 07:38:31 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-27 07:44:35
 */

//请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式

function DOM2JSON(domTree) {
  const tree = {};
  tree.tag = domTree.tagName;
  tree.children = [];
  domTree.childNodes.forEach((child) => tree.children.push(DOM2JSON(child)));
  return tree
}