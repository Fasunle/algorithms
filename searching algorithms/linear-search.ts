/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 *
 * For a linear search, the time complexity is O(n)
 */

const findTarget1 = (arr: number[], target: number): number => {
  let foundTargetIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return foundTargetIndex;
};

const arr1 = [1, 2, 3, 4, 7, 12, 67, 34];
const target1 = 12;

console.log(findTarget1(arr1, target1));
