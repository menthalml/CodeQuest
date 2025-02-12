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
  var result = [];
  for (let word of words) {
        let start = text.indexOf(word);
        while (start !== -1) { // 找到匹配的起点
            result.push([start, start + word.length - 1]);
            start = text.indexOf(word, start + 1); // 继续查找下一个匹配
        }
    }
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
    return result;
};
console.log('indexPairs', indexPairs("baabaaaaaa", ["b","a","ba","bb","aa"]));
