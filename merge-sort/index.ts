const mergeSort = (arr: number[] = []): number[] => {
  // base case
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  // divide
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);
  // conquer by returning sorted sub-arrays
  let leftSortedList = mergeSort(leftArr);
  let rightSortedList = mergeSort(rightArr);
  // merge all the sub-arrays
  return merge(leftSortedList, rightSortedList);
};

const merge = (left: number[], right: number[]): number[] => {
  let sortedList = [];
  // whenever any of the sorted sub-array is empty, we want to stop the loop and compute the array
  while (left.length && right.length) {
    //   merging engine
    if (left[0] < right[0]) {
      sortedList.push(left[0]);
      left.shift();
    } else {
      sortedList.push(right[0]);
      right.shift();
    }
  }
  // array must be computed as follows
  return [...sortedList, ...right, ...left];
};

const values = [1, 2, 4, 3, 2, 7, 3, 6, 0, -2];
const result = mergeSort(values);
console.log(result);
