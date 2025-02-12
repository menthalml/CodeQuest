function sumOfDigits(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const total = (nums[0] + '').split('').reduce((a, num) => {
    return Number(a) +Number(num) ;
  }, 0)
  return total % 2 === 0 ? 1 : 0;
};