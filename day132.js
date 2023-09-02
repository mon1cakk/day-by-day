/*
 * @Author: LeslieChen 
 * @Date: 2023-03-28 08:15:37 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-03-28 08:20:50
 */

//利用 XMLHttpRequest 手写 AJAX 实现
const getJson = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    }
    xhr.send();
  })
}