"use strict";
/**
https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/?envType=problem-list-v2&envId=array
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function sortedArrayToBST(nums) {
    if (!nums.length) {
        return null;
    }
    function helper(left, right) {
        if (left > right) {
            return null;
        }
        let mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        return root;
    }
    return helper(0, nums.length - 1);
}
console.log('111', sortedArrayToBST([-10, -3, 0, 5, 9]));
