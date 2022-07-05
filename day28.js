/*
 * @Author: LeslieChen 
 * @Date: 2022-07-03 18:00:24 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-05 00:16:29
 */

//原生实现一个表单提交
function formPost(url, params) {
  const temp = document.createElement('form');
  temp.action = url;
  temp.method = 'POST';
  temp.style.display = none;
  for(let key in params) {
    const opt = document.createElement('textarea');
    opt.name = key;
    opt.value = params[key];
    temp.appendChild(opt);
  }
  document.body.appendChild(temp);
  temp.submit();
  return temp
}

//动态插入10000个li标签
window.onload = () => {
  const ul = document.createElement('ul');
  const frag = document.createDocumentFragment();
  for(let i = 0; i < 10000; i++) {
    const li = document.createElement('li');
    li.innerHTML = i;
    frag.appendChild(li);
  }
  ul.appendChild(frag);
  ul.addEventListener('click', (event) => {
    const e = event || window.event;
    const target = e.target ||event.srcElement;
    if(target.nodeName.toLowerCase() === 'li'){
      console.log('777', target.innerHTML)
    }
  })
}