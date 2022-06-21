/**
 * 说明：给定一个字符串，找出不含有重复字符的最长子串的长度
 *      如给定'abcabcbb' ，没有重复字符的最长子串是'abc' ，那么长度就是3
 * 示例：
 *   lengthOfLongestSubstring('bbbbb'); // 返回 1
 *   lengthOfLongestSubstring('')； // 返回 0
 *   lengthOfLongestSubstring('cbca'); // 返回 3
 *   lengthOfLongestSubstring('c'); // 返回 1
 *   lengthOfLongestSubstring('abcdaccbac'); // 返回 4
 */

function lengthOfLongestSubstring(s) {
  let set=new Set();
  let i=0;
  let j=0;
  let maxLength=0;
  if(s.length===0) {
    return 0
  }
  for(let i=0;i<s.length;i++) {
    if(!set.has(s[i])) {
        set.add(s[i]);
        maxLength=Math.max(maxLength,set.size)
    }else{
      while(set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('cbca'));
console.log(lengthOfLongestSubstring('abcdaccbac'));