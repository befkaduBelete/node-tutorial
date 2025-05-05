// shift()
// Removes the first element of the array.
// Returns the removed element.
// let arr = [1, 2, 3];
// let first = arr.shift(); // arr = [2, 3], first = 1




const  number = new Array(1,2,3,4,5,6)
console.log("Number are ", number)

let a =[11,12,13,14,15,16,17,19]
const removed_element = number.shift()
console.log("Number are  After POP ", number)
console.log(`The Removed Element is ${removed_element}`)


for(let i=0;i<number.length;i++)
    console.log(`Element of Array at ${i} is ${number[i]}`)