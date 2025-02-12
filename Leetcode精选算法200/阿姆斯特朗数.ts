function isArmstrong(n: number): boolean {
  let total = 0;
  (n + '').split('').forEach((char) => {
    let num = parseInt(char)
    total += num * num * num;
  });
  return total === n;
};