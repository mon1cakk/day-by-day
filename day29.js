/*
 * @Author: LeslieChen 
 * @Date: 2022-07-05 00:16:58 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-05 23:52:03
 */

//数组去重(尽可能多的方式去实现)
let arr = [12,1,12,3,1,88,66,9,66];
function unique(arr){
  return [...new Set(arr)]
}
function unique(arr){
  let obj={};
  for(let i=0;i<arr.length;i++){
    let item=arr[i];
    if(obj[item]){
      arr[i]=arr[arr.length-1];
      arr.length--;
      i--;
      continue
    }
    obj[item]=item;
  }
  return arr
}
function unique(arr){
  let res=[];
  let map=new Map();
  for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],true);
      res.push(arr[i]);
    }
  }
  return res
}
function unique(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    let item=arr[i];
    if(res.indexOf(item)===-1){
      res.push(item)
    }
  }
  return res
}
function unique(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    let item=arr[i];
    if(res.lastIndexOf(item)===-1){
      res.push(item);
    }
  }
  return res
}
function unique(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    let item=arr[i];
    if(!res.includes(item)){
      res.push(item);
    }
  }
  return res
}
console.log(unique(arr));