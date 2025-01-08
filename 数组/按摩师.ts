function massage(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  // dp[i] 表示前i个元素获取到的最大值,保存的是到第i步骤能获取到的最大值，不是保存的每一个可以选择的结果
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[dp.length - 1];
}
console.log('123', massage([2, 7, 9, 3, 1]));
