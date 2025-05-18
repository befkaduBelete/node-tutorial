// Promise.race() takes an array of promises and returns a single promise that:
// Resolves or rejects as soon as the first promise settles
// It doesn’t wait for the others

function function1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("This is a function resolved in 5000ms")
        },5000)
    })
}

function function2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           reject("This is a function rejected in 1000ms")
        },1000)
    })
}

Promise.race([function1(),function2()]).then(res=>{
    console.log(res)
}).catch(error=>{
    console.log(error)
})