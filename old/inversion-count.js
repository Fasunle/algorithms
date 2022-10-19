/**
 * divide
 * conquer
 * combine
 *
 */

function merge(left = [], right = []) {
  const sortedArray = [];
  let inversion = 0;
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      inversion++;
      sortedArray.push(right.shift());
    }
  }
  return [[...sortedArray, ...left, ...right], inversion];
}

function divider(array = []) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  const half = Math.floor(array.length / 2);
  const left = array.splice(0, half);
  const right = array.splice(half);

  return merge(divider(left), divider(right));
}

console.log(divider([2, 1, 4, 2]));
