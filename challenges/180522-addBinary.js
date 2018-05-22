// Problem:

// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a,b) {
  var sum = a + b;
  var result = "";

  while(sum > 0) {
      var remainder = sum % 2;
      console.log(remainder);
      result = result + remainder;
      sum = Math.floor(sum/2);
      console.log(sum);

  }
  
  return result;
}

console.log(addBinary(5,6));


// Another Solution 

// number.tostring(2) -> number should be binary string.
function addBinary(a,b) {
return (a+b).toString(2)
}
console.log(addBinary(5,6)); 