/**
 * Brute-Force Algorithm
 * A recursive algorithm which uses divide-and-conquer paradigm
 */

/**
 *
 * @param {*} array
 * @returns inversions number
 */
function brute_force_weak(array = []) {
  console.log(array.length);
  let inversion = 0;
  //   base cases
  if (array.length <= 1) {
    return inversion;
  }
  // big-O (n-square) Quadratic running time
  for (let i = 0; i < array.length - 1; i++) {
    const A = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const B = array[j];
      if (A < B) {
        inversion++;
        console.log(`A = ${A} > B =${B} \n ${inversion}`);
      }
    }
  }
  return inversion;
}

function countSplitInversion(array = []) {
  let inversion = 0;
  // base cases
  if (array.length <= 1) {
    return inversion;
  }
  for (let i = 0; i < array.length - 1; i++) {
    const A = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const B = array[j];
      if (A > B) {
        inversion++;
      }
    }
  }
  return inversion;
}

function bruteForce(array = []) {
  let inversion = 0;
  const n = Math.floor(array.length / 2);
  // base cases
  if (array.length <= 1) {
    return inversion;
  }
  //   implementation of bruteForce algorithm goes here
  //   TODO: Divide array into two
  const left = array.slice(0, n);
  const right = array.slice(n);
  for (let i = 0; i < array.length - 1; i++) {
    const A = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const B = array[j];
      if (A > B) {
        inversion++;
      }
    }
  }
  //   TODO: recursively call bruteForce with n/2 of previous array
  console.log(`left ----> ${left}\n`);
  console.log(`right ----> ${right}\n`);
  const leftInversion = bruteForce(left);
  const rightInversion = bruteForce(right);
  const splitInversion = countSplitInversion(array);
  console.log(
    `leftInversion ${leftInversion}\nrightInversion ${rightInversion}\nsplitInversion ${splitInversion} `
  );
  return leftInversion + rightInversion + splitInversion;
}
// console.log(
//   brute_force_weak([
//     1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5,
//     1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5,
//     1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5,
//     1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5,
//     1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5, 1, 2, 4, 2, 5,
//     1, 2, 4, 2, 5, 4,
//   ])
// );

console.log(bruteForce([6, 5, 4, 3, 2, 1]));
