// join() in JavaScript (and similar in other languages) is a method used to combine all elements of an array into a single string, with an optional separator between elements.
// array.join(separator)
// separator (optional): A string to insert between each element.
// If omitted, it defaults to a comma (,).


let arr = [4, 8, 6, 2];
let str = arr.join();  // Default separator is ","
console.log(str);  // Output: "4,8,6,2"



let arr1 = [4, 8, 6, 2];
let str1 = arr1.join("");  // No separator
console.log(str1);  // Output: "4862"



let arr2 = [4, 8, 6, 2];
let str2 = arr2.join("-"); 
console.log(str2);  // Output: "4-8-6-2"