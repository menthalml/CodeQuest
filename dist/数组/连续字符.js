"use strict";
/**
 * 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 * 请你返回字符串 s 的 能量。
 */
function maxPower(s) {
    let start = 0, maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 === s.length || s[i] !== s[i + 1]) {
            maxLength = maxLength < i - start + 1 ? i - start + 1 : maxLength;
            start = i + 1;
        }
    }
    return maxLength;
}
console.log('111', maxPower('leetcode'));
