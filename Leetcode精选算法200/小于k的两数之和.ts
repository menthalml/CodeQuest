// 给你一个整数数组 nums 和整数 k ，返回最大和 sum
// 满足存在 i < j 使得 nums[i] + nums[j] = sum 且 sum < k 。如果没有满足此等式的 i, j 存在，则返回 - 1 。
function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const max = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const diff = k - nums[i] - 1;
    const index = nums.indexOf(diff);
    if (index !== -1) {
      return diff + nums[i];
    }
  }
  return -1;
};