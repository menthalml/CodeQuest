/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */

// 给出 字符串 text 和 字符串列表 words, 返回所有的索引对[i, j]
// 使得在索引对范围内的子字符串 text[i]...text[j]（包括 i 和 j）属于字符串列表 words。
// 输入: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
// 输出: [[3,7],[9,13],[10,17]]
var indexPairs = function (text, words) {
  let result = [];
  const findStr = (str) => {
    let i = 0, j = 0;
    for (; j < text.length; j++) {
      if (str[i] === text[j]) {
        console.log('i', str[i], text[j]);
        i++;
        j++;
        if (i === str.length) {
          return [j - str.length, j];
        }
      } else {
        i = 0;
      }
    }
    return [];
  }
  for (let i = 0; i < words.length; i++) {
    const temp = findStr(words[i]);
    result.push(temp);
  }
  return result;
};
console.log('indexPairs', indexPairs("thestoryofleetcodeandme", ["story","fleet","leetcode"]))