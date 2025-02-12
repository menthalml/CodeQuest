// function isMajorityElement(nums: number[], target: number): boolean {
//     let left = binarySearchLeft(nums, target);
//     return left !== -1 && left + Math.floor(nums.length / 2) < nums.length && nums[left + Math.floor(nums.length / 2)] === target;
// }

// function binarySearchLeft(nums: number[], target: number): number {
//     let l = 0, r = nums.length - 1;
//     while (l <= r) {
//         let mid = l + Math.floor((r - l) / 2);
//         if (nums[mid] >= target) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }
//     if (l < nums.length && nums[l] === target) {
//         return l;
//     }
//     return -1;
// }
function isMajorityElement(nums: number[], target: number): boolean {
     let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        console.log(left, right, mid);
        if (nums[mid] >= target) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
    }
  if (left >= 0 && (left + Math.floor(nums.length / 2) < nums.length) && nums[left + Math.floor(nums.length / 2)] === target) {
    return true;
  }
    return false;
}