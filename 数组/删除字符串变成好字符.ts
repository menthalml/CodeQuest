/**
 * 一个字符串如果没有 三个连续 相同字符，那么它就是一个 好字符串 。
 * 给你一个字符串 s ，请你从 s 删除 最少 的字符，使它变成一个 好字符串 。
 * 请你返回删除后的字符串。题目数据保证答案总是 唯一的 。
 */

function makeFancyString(s: string): string {
  let result = [];
  let count = 1;
  result.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count <= 2) {
      result.push(s[i]);
    }
  }
  return result.join('');
}
console.log('makeFancyString', makeFancyString('leeeeeetcode'));
