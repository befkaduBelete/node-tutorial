// unshift()
// Adds one or more elements to the beginning of an array.
// Returns the new length of the array.
// let arr = [2, 3, 4];
// arr.unshift(1); // [1, 2, 3, 4]

//unshift add new element at 0 index or at the beginning of the array

const  number = new Array(1,2,3,4,5,6)
console.log("Number are ", number)

let a =[11,12,13,14,15,16,17,19]
const unshfit = number.unshift(...a)
console.log("Number are  After PuUnshift ", unshfit)

for(let i=0;i<number.length;i++)
    console.log(`Element of Array at ${i} is ${number[i]}`)