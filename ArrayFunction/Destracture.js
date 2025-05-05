const arr = [1,2,3,4,5,6,7];

//Array Destructuring 

/*Array destructuring is a feature in JavaScript
 (and TypeScript) that allows you to unpack 
 values from arrays (or properties 
 from objects) into distinct variables 
 in a clean and readable way.*/
 const [a,b,c] =arr;
 console.log(`First Element ${a}`)

 const [d=88,k] =arr;
 console.log(`First Element ${d}`)

 const [f = 5, s = 7] = [1];
console.log(f); // 1
console.log(s); // 7 (default)


let x = 1, y = 2;
const [z, m] = [y, x];
console.log(z); // 2
console.log(m); // 1




const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]




//Skipping Values:
const [ ,w,,u] = [10, 20, 30,50,60];
console.log(w); // 20
console.log(u); // 50

//Nested Array Destructuring 

const NameList = ['Kebede', 'Alemu',['Kebede Father', 'Alemu Father', "Mihret"]]
let f_name = NameList[2]
console.log(f_name)
console.log(f_name[1])

const [,,[,Target_Name,]] =NameList
console.log(Target_Name)