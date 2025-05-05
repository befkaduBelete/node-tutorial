// The slice() method is used to extract a part of an array (or string) without changing the original array.
// array.slice(start, end)
// start (optional): index to start extraction (inclusive).
// end (optional): index to stop extraction (exclusive). If omitted, it goes till the end.



const  number = new Array(1,2,3,4,5,6)
console.log("Number are ", number)

let a =[11,12,13,14,15,16,17,19]
const copy_array = number.slice(2,4)
console.log("Number are  After POP ", copy_array)



for(let i=0;i<copy_array.length;i++)
    console.log(`Element of Array at ${i} is ${copy_array[i]}`)

