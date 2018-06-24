// 6. Add Digits    
//  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

//  Example:

//  Input: 38
//  Output: 2 
//  Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//               Since 2 has only one digit, return it.


//  @param {number} num
//  @return {number}

var addDigits = function (num) {
  if(num < 10) return num;
  var numToStrArr = num.toString().split(''); // number to string '38', and to array ['3', '8']
  var sum = 0;
  numToStrArr.forEach(function (item) {
    var strToNum = parseInt(item) // string to number '3' -> 3
    sum += strToNum; // 3 + 8 = 11
  })
  return addDigits(sum); // recursive function
}
console.log(addDigits(38)); // 2