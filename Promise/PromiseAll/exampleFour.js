//case 2
//resolve -1 
//Reject  - 1

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

Promise.all([function1(),function2()]).then(res=>{console.log(res)}).catch(er=>{
    console.log(er)
})