// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Array/list size is at least 2 .

// Array/list numbers could be a mixture of positives , ngatives also zeros .

// adjacentElementsProduct([1,2,3])  ==>  return 6
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

function adjacentElementsProduct(array) {
  var multiply = [];
  array.forEach(function(item, index, array) {
    var multiplyValues = array[index]*array[index+1];
    if(!Number.isNaN(multiplyValues)) multiply.push(multiplyValues); // [2,6]
  })
  return Math.max.apply(null, multiply);
} 
  console.log(adjacentElementsProduct([1,2,3])); // 6