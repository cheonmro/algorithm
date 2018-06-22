// Move Zeroes 
//  Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

//  Example:

//  Input: [0,1,0,3,12]
//  Output: [1,3,12,0,0]
//  Note:

//  You must do this in-place without making a copy of the array.
//  Minimize the total number of operations.

//  @param {number[]} nums
//  @return {void} Do not return anything, modify nums in-place instead.

var moveZeroes = function (nums) {
  return nums.map(function (item, index, array) {
    if(item === 0) {
      var zero = array.splice(index, 1); // remove the number of items(1) from index -> [0]
      array.push(zero[0]);
    }
    return array[index];

  })
};
console.log(moveZeroes([0,1,0,3,12])); // [ 1, 3, 12, 0, 0 ]