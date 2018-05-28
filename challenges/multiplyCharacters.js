// Problem: Multiply Characters

// Here we have a function that help us spam our hearty laughter. But is not working! 
// I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

function spam(number){
  // 1. Get a number from user => 'number'
  // 2. Set an empty string => 'result'
  var result = "";
  // 3. While 'i' is less than 'number', (i = 0)
  for(var i = 0; i < number; i++) {
    // 3-1. Add "hue" to result
    result += "hue";
  }
  // 4. Return result
  return result;
}

console.log(spam(2)); // huehue



// Another Solution

function spam(number){
  return "hue".repeat(number);
}