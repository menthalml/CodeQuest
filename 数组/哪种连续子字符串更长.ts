/**
 * 给你一个二进制字符串 s 。如果字符串中由 1 组成的 最长 连续子字符串
 * 严格长于 由 0 组成的 最长 连续子字符串，返回 true ；否则，返回 false 。
 * 例如，s = "110100010" 中，由 1 组成的最长连续子字符串的长度是 2 ，由 0 组成的最长连续子字符串的长度是 3 。
 * 注意，如果字符串中不存在 0 ，此时认为由 0 组成的最长连续子字符串的长度是 0 。字符串中不存在 1 的情况也适用此规则。
 */

function checkZeroOnes(s: string): boolean {
  let zeroLength = 0,
    oneLength = 0,
    start = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 === s.length || s[i] !== s[i + 1]) {
      if (s[i] === '1') {
        oneLength = i - start + 1 > oneLength ? i - start + 1 : oneLength;
      } else {
        zeroLength = i - start + 1 > zeroLength ? i - start + 1 : zeroLength;
      }
      start = i + 1;
    }
  }
  return oneLength > zeroLength;
}
