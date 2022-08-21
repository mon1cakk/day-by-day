/*
 * @Author: LeslieChen 
 * @Date: 2022-08-18 22:37:41 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-21 18:39:57
 */

//实现一个简单的ajax
const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};