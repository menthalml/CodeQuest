// function twoSum(nums: number[], target: number): number[] {
//   for (let i: number = nums.length - 1; i >= 0; i--) {
//     const diffNum: number = target - nums[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (diffNum === nums[j]) {
//         return [j, i];
//       }
//     }
//   }
// }

// 哈希表的实现
function twoSum(nums: number[], target: number) {
  let mapObj = new Map();
  for (let i: number = 0; i < nums.length; i++) {
    if (mapObj.has(nums[i] - target)) {
      return [mapObj.get(nums[i] - target), i];
    }
    mapObj.set(nums[i], i);
  }
}
