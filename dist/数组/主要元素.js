"use strict";
function majorityElement(nums) {
    let list = [];
    for (let i = 0; i < nums.length; i++) {
        if (!list[nums[i]]) {
            list[nums[i]] = 1;
        }
        else {
            list[nums[i]] += 1;
        }
        if (list[nums[i]] > nums.length >> 1) {
            return nums[i];
        }
    }
    return -1;
}
console.log('majorityElement', majorityElement([3, 2]));
