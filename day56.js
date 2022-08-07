/*
 * @Author: LeslieChen 
 * @Date: 2022-08-07 01:16:04 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-08 00:16:30
 */

//实现一个函数 camelCase，对变量转化为驼峰命名

//驼峰转短横线
function toKebabCase(str) {
  let res = str.replace(/([A-Z])/g, (all, i) => {
    return "-" + i.toLowerCase();
  });
  if (res.slice(0, 1) === "-") {
    res = res.slice(1); //去除开头的-
  }
  return res;
}
//短横线转驼峰
function toCamelCase(str) {
  return str.replace(/-([a-zA-Z])/g, function (all, i) {
    return i.toUpperCase();
  });
}

console.log(toCamelCase("get-element-by-id"));
console.log(toKebabCase("GetElementById"));