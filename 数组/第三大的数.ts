function thirdMax(nums: number[]): number {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  console.log('nums', nums);
  return nums[0];
}
