// Promise.allSettled() is a method in JavaScript that takes an array of promises and returns 
// a single promise that resolves when all of the input promises have settled, meaning each has either fulfilled or rejected.

function function1(){
   return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is resolve function")
    })
   })
}

function function2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         reject("This is reject function ")
       })
    })
}

Promise.allSettled([function1(),function2()]).then(res=>{console.log(res)}).catch(er=>{
    console.log(er)
})