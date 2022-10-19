// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function largestSum(nums) {
  let current = 0;
  let largest = -Infinity;

  for (const num of nums) {
    current += num;

    if (current < num) {
      current = num;
    }

    if (largest < current) {
      largest = current;
    }
  }
  return largest;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let nums2 = [-1, 2, -3, 4, 5, -7, -1, 0, 5];
console.log(largestSum(nums2));
