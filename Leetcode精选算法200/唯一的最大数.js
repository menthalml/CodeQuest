function largestUniqueNumber(nums) {
    var map = new Map(), max = -1;
    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    map.forEach(function (key) {
        if (map.get(key) === 1 && key > max) {
            max = key;
        }
    });
}
console.log('111', largestUniqueNumber([8, 8, 9, 9]));
