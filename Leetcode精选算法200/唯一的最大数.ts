function largestUniqueNumber(nums: number[]): number {
  let map = new Map(), max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  map.forEach((key, value) => {
    if (map.get(value) === 1 && value > max) {
      max = value;
    }
  })
  return max;
}
console.log('111', largestUniqueNumber([8, 8, 9, 9]))