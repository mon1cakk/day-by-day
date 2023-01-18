/*
 * @Author: LeslieChen 
 * @Date: 2023-01-06 00:12:27 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-01-06 00:38:49
 */

//封装一个异步加载图片的方法
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log('图片加载完成');
      resolve(img);
    }
    img.onerror = () => {
      reject(new Error('Could not load image at' + url));
    }
    img.src = url;
  })
}