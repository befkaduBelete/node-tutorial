//Array push, unshift , shift and pop functions . All these function mutate the original array .
//push and Unshift function insert new element of array at the end and at the first position of array respectively 

//Push add element at the end 
//unshift  add new element at 0 index 
//note push and unshift return the new/ the mutated array size 

//shift and pop these function also mutate the original array by removing the element at the first and the last position respectively 

//shift remove the first element of the array 
//pop remove the last element of the array 
//shift and pop return the removed element


// push()
// Adds one or more elements to the end of an array.
// Returns the new length of the array.
// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]


const  number = new Array(1,2,3,4,5,6)
console.log("Number are ", number)

// for(let i=0;i<number.length;i++)
//     console.log(`Element of Array at ${i} is ${number[i]}`)
// add the element at the end of the array
const ret = number.push(7,3,4,5,6,7)
console.log("Number are  After Push", ret)

for(let i=0;i<number.length;i++)
    console.log(`Element of Array at ${i} is ${number[i]}`)



// unshift()
// Adds one or more elements to the beginning of an array.
// Returns the new length of the array.
// let arr = [2, 3, 4];
// arr.unshift(1); // [1, 2, 3, 4]

//unshift add new element at 0 index or at the beginning of the array
let a =[11,12,13,14,15,16,17,19]
const unshfit = number.unshift(a)
console.log("Number are  After PuUnshift ", unshfit)


for(let i=0;i<number.length;i++)
    console.log(`Element of Array at ${i} is ${number[i]}`)





//Shift it remove the first array element at index 0

const removeFirstElement = number.shift()
console.log("Removed Element is  ", removeFirstElement)
console.log("Array After Removing the first Element  ", number)


const removeLastElement = number.pop()
console.log("Removed Element is  ", removeLastElement)
console.log("Array After Removing the Last Element  ", number)