# array.indexOf()
It returns the first index at which a given element can be found in the array,
or return -1 if it is not present.

<br>

Example:
```
var array = ['a', 'b', 'c', 'd', 'b'];

console.log(array.indexOf('b')); // 1


<!-- start from index 2 -->
console.log(array.indexOf('b', 2)); // 4


<!-- the 'giraffe' element is not in the array -->
console.log(array.indexOf('z')); // -1
```

<br>

## Syntax

```
array.indexOf(searchElement, fromIndex)
```

searchElement: Element to locate in the array

fromIndex: The index to start the search at.

<br>

Example:
```
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```