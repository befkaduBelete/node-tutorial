const square = (num)=>num*num;
console.log(square(6))

const mesg = () =>"Hello JS"
console.log(mesg())

const add = (a,b) =>a+b;
console.log(add(3,6))

const person = {
    fname: "Befkadu",
    lname:"Belete"
}

const getFullName = person =>person
const personName = getFullName(person)
console.log(personName.lname)
console.log(personName.fname)

// const getFullName = person =>`${person.fname} ${person.lname}`
// console.log(getFullName(person))
