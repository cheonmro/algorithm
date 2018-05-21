function fizzbuzz(num) {
  var result = '';
  if(num % 15 === 0) {
    return result = 'fizzbuzz';
  } else if(num % 3 === 0) {
    return result = 'fizz';
  } else if(num % 5 === 0) {
    return result = 'buzz';
  } else {
    return result = num;
  }
}

console.log(fizzbuzz(15));