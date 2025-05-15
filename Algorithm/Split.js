// split() is used to split a string into an array of substrings, based on a specified separator.
// separator: the character(s) to split the string on (e.g. " ", ",", "").

// Returns an array of substrings.


let str = "apple,banana,cherry";
let arr = str.split(",");
console.log(arr);  // ["apple", "banana", "cherry"]

let str2 = "hello world";
let arr2 = str2.split(" ");
console.log(arr2);  // ["hello", "world"]


let str3 = "1234";
let arr3 = str3.split("");
console.log(arr3);  // ["1", "2", "3", "4"]