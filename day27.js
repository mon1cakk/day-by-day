/*
 * @Author: LeslieChen 
 * @Date: 2022-07-03 11:54:15 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-03 12:24:12
 */

//实现一个简易版formDate方法  ->new Date和Date now的区别
const today = new Date();

function formDate(time) {
  const dd = String(time.getDate()).padStart(2, '0'); // 日
  const mm = String(time.getMonth() + 1).padStart(2, '0'); // 月
  const yyyy = time.getFullYear(); // 年
  const curDate = `${yyyy}-${mm}-${dd}`
  return curDate
}

console.log('777', formDate(today));