/*
 * @Author: LeslieChen 
 * @Date: 2022-07-17 12:08:29 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-17 12:15:43
 */

//获取URL参数
const URL = "http://www.baidu.com?name=elephant&age=25&sex=male&num=100"

function queryURLParams(URL) {
  // const url = location.search; // 项目中可直接通过search方法获取url中"?"符后的字串
  const url = URL.split("?")[1];
  const obj = {}; // 声明参数对象
  const arr = url.split("&"); // 以&符号分割为数组
  for (let i = 0; i < arr.length; i++) {
    let arrNew = arr[i].split("="); // 以"="分割为数组
    obj[arrNew[0]] = arrNew[1];
  }
  return obj
}
console.log(queryURLParams(URL))