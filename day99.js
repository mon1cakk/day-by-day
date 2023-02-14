/*
 * @Author: LeslieChen 
 * @Date: 2023-02-14 00:38:15 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-02-14 00:39:45
 */

//手写object.create
function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F()
}