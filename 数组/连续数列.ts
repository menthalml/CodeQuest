function maxSubArray(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  let currentSum = nums[0],
    maxNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    maxNum = Math.max(maxNum, currentSum);
  }
  return maxNum;
}
console.log('maxSubArray', maxSubArray([-2, -1]));
