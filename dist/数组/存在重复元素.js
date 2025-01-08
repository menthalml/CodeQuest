"use strict";
/**
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j
 * 满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 */
function containsNearbyDuplicate(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let j = map.get(nums[i]);
            if (Math.abs(i - j) <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
        if (i >= k) {
            map.delete(nums[i - k]);
        }
    }
    return false;
}
console.log('111', containsNearbyDuplicate([1, 1, 1, 2, 3, 4, 5], 4));
