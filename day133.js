/*
 * @Author: LeslieChen 
 * @Date: 2023-04-01 07:05:27 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-04-01 07:14:05
 */

//分片思想解决大数据量渲染问题
let ul = document.getElementById('container');
let total = 100000;
let once = 20;
let page = total / once;
let index = 0;
function loop(currTotal, currIndex) {
  if (currTotal < 0) return false
  let pageCount = Math.min(currTotal, once);
  window.requestAnimationFrame = (function () {
    for(let i = 0 ; i < pageCount ; i++) {
      let li = document.createElement('li');
      li.innerText = currIndex + i + ':' + ~~(Math.random() * total);
      ul.appendChild(li);
    }
    loop(currTotal - pageCount, currIndex + pageCount)
  })
}
loop(total, index);