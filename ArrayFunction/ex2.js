const awol = new Array('a','e','i','o','u')
console.log("First",awol)

const awol2 = new Array('a','e','i','o','u')
console.log("Second ",awol2)

console.log(awol===awol2)

const exam3 = new Array(2)
console.log(exam3)
for(let i=0; i<awol.length; i++)
    console.log('Element at index', i , "is", awol[i])