/*
 * @Author: LeslieChen 
 * @Date: 2022-08-23 22:15:26 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-25 00:03:31
 */

//渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染

let ul = document.getElementById('container');
//插入的总条数
let total = 100000;
//一次插入的条数
let once = 20;
//总页数
let page = total / once;
//每条记录的索引
let index = 0;
//循环加载数据
function loop(curTotal, curIndex) {
  if (curTotal <= 0) return false
  //每页多少条
  let pageCount = Math.min(curTotal, once);
  window.requestAnimationFrame(function () {
    for(let i = 0 ; i < pageCount ; i++) {
      let li = document.createElement('li');
      li.innerText = curIndex + i + ':' + ~~(Math.random() * total);
      ul.appendChild(li);
    }
    loop(curTotal - pageCount, curIndex  + pageCount);
  })
}
loop(total, index)