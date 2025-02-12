function confusingNumber(n: number): boolean {
  //   如 0, 1, 6, 8, 9 旋转 180° 以后，得到了新的数字 0, 1, 9, 8, 6 。
  //  2, 3, 4, 5, 7 旋转 180° 后，得到的不是数字。
  const nStr = (n + '').split('');
  const strMap = {
    '0': '0',
    '2': '#',
    '3': '#',
    '4': '#',
    '5': '#',
    '6': '#',
    '7': '#',
    '8': '8',
    '9': '6',
    '1': '1'
  }
  let newStr = '';
  nStr.forEach((item) => {
    newStr += strMap[item];
  });
  if (nStr.indexOf('#') !== -1) {
    return false;
  }
  return parseInt(newStr, 10) !== n;
};
console.log('confusingNumber', confusingNumber(21));