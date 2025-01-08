function findContentChildren(g: number[], s: number[]): number {
  // 最大的饼干分给食粮最大的孩子
  s = s.sort((a, b) => {
    return a - b;
  });
  g = s.sort((a, b) => {
    return a - b;
  });
  let num = 0,
    i = 0,
    j = 0;
  for (; i < s.length && j < g.length; ) {
    if (s[i] >= g[j]) {
      num++;
      i++;
    }
    j++;
  }
  return num;
}
console.log('findContentChildren', findContentChildren([1, 2, 3], [1, 1]));
