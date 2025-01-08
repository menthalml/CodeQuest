"use strict";
function thirdMax(nums) {
    nums = nums.sort((a, b) => {
        return a - b;
    });
    console.log('nums', nums);
    return nums[0];
}
