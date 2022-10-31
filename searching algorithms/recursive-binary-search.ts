/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 *
 * For a binary search, the time complexity is O(log n)
 *
 * NOTE: for a binary search, the array must be sorted.
 */

let findTarget3 = (arr: number[], start: number, end: number, target: number): number => {
  if (arr.length >= 1) {
    //   divide the array into halves in each interation
    const searchKeyIndex = Math.floor((start + end) / 2); // middle of the array
    const searchKey = arr[searchKeyIndex];
    //   target might be at the center
    if (target === searchKey) return searchKeyIndex;
    console.log({ start, end, searchKey });

    //   target might be at the left
    if (target < searchKey) {
      return findTarget3(arr, start, searchKeyIndex - 1, target);
    } else {
      //   target might be at the right
      return findTarget3(arr, searchKeyIndex + 1, end, target);
    }
  }

  return -1;
};

let arr3 = [1, 2, 3, 4, 12, 34, 67, 78, 90, 102];
let target3 = 12;

console.log(findTarget3(arr3, 0, 10, target3));
