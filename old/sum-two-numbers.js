function twoSum(nums = [], target = 0) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

const nums = [
  1, 1, 32, 3, 4, 5, 62, 64, 98, 2, 1, 1, 32, 3, 4, 5, 62, 64, 2, 1, 1, 32, 3,
  4, 5, 62, 64, 2, 1, 1, 32, 3, 4, 5, 62, 64, 2, 1, 1, 32, 3, 4, 5, 62, 64,
];

console.log(twoSum(nums, 100));
