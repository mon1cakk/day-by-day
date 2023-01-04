/*
 * @Author: LeslieChen 
 * @Date: 2022-11-28 22:38:30 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-11-30 00:22:40
 */

//输入50a6we8y20x 输出50个a，6个we，8个y，20个x
const str = '50a6we8y20x';
const outPut = (str) => {
  let wordStr = '', numStr = '';
  let res = '';
  [].forEach.call(str, word => {
    const num = Number(word);
    if (!isNaN(num) && wordStr === '') {
      numStr += word;
    } else if (isNaN(num) && numStr !== '') {
      wordStr += word;
    } else if (!isNaN(num) && numStr != '' && wordStr !== '') {
      res += numStr + '个' + wordStr + ',';
      wordStr = '';
      numStr = word;
    }
  })
  if (wordStr !== '' && numStr !== '') {
    res += numStr + '个' + wordStr
  }
  return res
}
console.log(outPut(str))