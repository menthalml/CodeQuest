function findDisappearedNumbers(nums: number[]): number[] {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]);
    if (nums[val - 1] > 0) {
      nums[val - 1] = -nums[val - 1];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}
console.log('123', findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
