// Problem: Return an array with the number of multiples 3, 5, and 15

// Write a function that takes an integer and returns an array [A, B, C], 
// where A is the number of multiples of 3 (but not 5) below the given integer, 
// B is the number of multiples of 5 (but not 3) below the given integer and 
// C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]


function solution(number){
  // 1. Get an integer from user, number
  // 2. Set the number of multiples 3, 5, and 15
  var num3 = 0;
  var num5 = 0;
  var num15 = 0;
  // 3. from i = 1 to i less than number using for statement
  for(var i = 1; i < number; i++) {
    if((i % 3 === 0) && (i % 5 !== 0)) {
      num3 += 1;
    } else if((i % 5 === 0) && (i % 3 !== 0)) {
      num5 += 1;
    } else if(i % 15 === 0) {
      num15 += 1;
    }
  }
  var result = [num3, num5, num15];
  return result;
}


// Another solution

function solution(n) {
  --n;
  const c15 = Math.floor(n / 15);
  const c3 = Math.floor(n / 3) - c15;
  const c5 = Math.floor(n / 5) - c15;
  return [c3, c5, c15];
}