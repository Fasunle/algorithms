export function karatsuba(number1 = 0, number2 = 0) {
  const term1 = String(number1);
  const term2 = String(number2);
  let n = 0;
  if (term1.length % 2 || term2.length % 2) {
    console.log('default algorithm NOT karatsuba');
    return parseInt(term1) * parseInt(term2);
  }
  if (term1.length == term2.length && term1.length != 1) {
    n = term1.length / 2;
  }
  const a = parseInt(term1.slice(0, n));
  const b = parseInt(term1.slice(n));
  const c = parseInt(term2.slice(0, n));
  const d = parseInt(term2.slice(n));

  const ac = a * c;
  const bd = b * d;
  const a_plus_b = a + b;
  const c_plus_d = c + d;
  const a_b_times_c_d = a_plus_b * c_plus_d - ac - bd;

  const res1 = ac * 10 ** (n * 2);
  const res2 = a_b_times_c_d * 10 ** n;
  return res1 + res2 + bd;
}

console.log(karatsuba(10, 40));
// console.log(
//   karatsuba(
//     3141592653589793238462643383279502884197169399375105820974944592,
//     2718281828459045235360287471352662497757247093699959574966967627
//   )
// );
