"use strict";
function findContentChildren(g, s) {
    // 最大的饼干分给食粮最大的孩子
    s = s.sort((a, b) => {
        return a - b;
    });
    g = g.sort((a, b) => {
        return a - b;
    });
    let i = 0, j = 0;
    for (; i < s.length && j < g.length; i++) {
        if (s[i] >= g[j]) {
          num++;
          j++;
        }
    }
    return j;
}
console.log('findContentChildren', findContentChildren([10,9,8,7], [5,6,7,8]));
