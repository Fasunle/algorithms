/**
 * Merge Sort Algorithm
 *
 * Using Recursive Pattern
 *with big-O of nlog(n) to base 2

  --->  O(nlogn)
 * Divide-and-Conquer Paradigm
 */

/**
 *
 * @param {Array} left
 * @param {Array} right
 * @returns Sorted Array
 *
 */
function merge(left = [], right = []) {
  const sortedArray = [];
  // loop until one of the list is exhausted
  // i.e n operations where n = either left or right length
  while (left.length && right.length) {
    console.log('merge is called in ', count++, 'times\n');
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
    // console.log("sorted array is ", sortedArray);
  }
  return [...sortedArray, ...left, ...right];
}
let count = 1;
let count2 = 0;
/**
 *
 * @param {Array} array
 * @returns merge function with recursive call
 */
function mergeSort(array = []) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  // get the half of the array
  const n = array.length / 2;
  // divide the array into two roughly equal halves
  const left = array.splice(0, n);
  const right = array;
  console.log('reursive call is ', count2++, '\n');
  // return merge
  return merge(mergeSort(left), mergeSort(right));
}

// TESTING
const test_data = [
  5, 2, 8, 9, 100, 98, 600, 54, 23, 87, 4, 5, 76, 64, 12, 2, 3, 5, 2, 8, 9, 100, 98, 600, 54, 23,
  87, 4, 5,
];
// console.log(mergeSort(test_data.slice(0, 5)));
// console.log(test_data.slice(0, 5).length);
console.log(mergeSort([1, 3, 2, 9, 3, 4]));
