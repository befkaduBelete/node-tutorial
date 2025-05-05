
// Swap the values
let a = 1;
let b = 2;

console.log("Before Swap");
console.log(`A = ${a}`);
console.log(`B = ${b}`);

// Swap using destructuring
[a, b] = [b, a];

console.log("After Swap");
console.log(`A = ${a}`);
console.log(`B = ${b}`);