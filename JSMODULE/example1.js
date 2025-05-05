//Declaration & Defining Function 
function PrintMe(){
  return "Hi ..."
}

console.log(PrintMe()) // Calling Function 
console.log(PrintMe) // This print the function body


// Defining a function as expression 
const print = function(){
    console.log("This is Defining function as expression ")
}
print();

//Executable Function 
// Executable Function (IIFE)
(function () {
    console.log("Ex Function");
})();


const add = function(a,b){
    console.log(`This is the sum of the number ${a + b}`)
}
add(1,3)


function FunctionName(...args){
    console.log(args)
}