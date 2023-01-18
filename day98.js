/*
 * @Author: LeslieChen 
 * @Date: 2023-01-18 14:58:53 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2023-01-18 15:31:48
 */

//限制异步操作的并发个数并尽可能快的完成全部

var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];

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

function limitLoad(urls, handler, limit) {
  const data = []; //存储所有的结果
  let p = Promise.resolve();
  const handlerUrls = (urls) => {
    const doubleDim = [];
    const len = Math.ceil(urls / limit);
    console.log(len);
    for(let i = 0 ; i < len ; i++) {
      doubleDim.push(urls.slice(i * limit, (i + 1) * limit)); //3个3个的存储url
    }
    return doubleDim
  }
  const ajaxImg = (urlCollect) => { // 将一组字符串url 转换为一个加载图片的数组
    console.log(urlCollect);
    return urlCollect.map(p => handler(p))
  }
  const doubleDim = handlerUrls(urls);
  doubleDim.forEach(urlCollect => {
    p = p.then(() => Promise.all(ajaxImg(urlCollect))).then(res => {
      data.push(...res);
      return data
    })
  })
  return p
}
limitLoad(urls, loadImg, 3).then(res => {
  console.log(res); // 最终得到的是长度为8的img数组: [img, img, img, ...]
  res.forEach(img => {
    document.body.appendChild(img);
  })
});