/*
 * @Author: LeslieChen 
 * @Date: 2022-08-09 00:56:08 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-08-09 23:05:11
 */

// 用Promise实现图片的异步加载

const imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log('图片请求成功，可进行通用操作');
      resolve(img);
    }
    img.onerror = (err) => {
      console.log('图片请求失败，不可进行操作');
      reject(err);
    }
  })
}

imageAsync(url).then(() => {
  console.log('图片请求成功');
}).catch(() => {
  console.log('图片请求失败');
})