/*
 * @Author: LeslieChen 
 * @Date: 2022-11-23 01:54:08 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-23 02:00:31
 */

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
// render(template, data); // 我是姓名，年龄18，性别undefined

const render = (template, data) => {
  const computed = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    console.log('res', match, key)
    return data[key]
  })
  return computed
}
console.log(render(template, data));