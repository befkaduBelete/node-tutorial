// push()
// Adds one or more elements to the end of an array.
// Returns the new length of the array.
// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]


const  number = new Array(1,2,3,4,5,6)
console.log("Number are ", number)

let a =[11,12,13,14,15,16,17,19]
const unshfit = number.push(...a)
console.log("Number are  After PuUnshift ", unshfit)

for(let i=0;i<number.length;i++)
    console.log(`Element of Array at ${i} is ${number[i]}`)