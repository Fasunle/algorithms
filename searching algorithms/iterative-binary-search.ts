/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 *
 * For a binary search, the time complexity is O(log n)
 *
 * NOTE: for a binary search, the array must be sorted.
 */

let findTarget2 = (arr: number[], target: number): number => {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    //   divide the array into halves in each interation
    const searchKeyIndex = Math.floor((start + end) / 2); // middle of the array
    const searchKey = arr[searchKeyIndex];

    //   target might be at the center
    if (target === searchKey) return searchKeyIndex;

    //   target might be at the left
    if (target < searchKey) {
      end = searchKeyIndex - 1;
    } else {
      //   target might be at the right
      start = searchKeyIndex + 1;
    }
  }

  return -1;
};

let arr2 = [1, 2, 3, 4, 12, 34, 67, 78, 90, 102];
let target2 = 12;

console.log(findTarget2(arr2, target2));
