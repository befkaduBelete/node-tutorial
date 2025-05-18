function function1(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is function 1")
    })
   },1000)
}
function function2(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is function 2")
    })
   },1500)
}
function function3(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is function 3")
    })
   },2000)
}
function function4(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is function 4")
    })
   },3000)
}

Promise.all([function1(),function2(),function3(),function4()]).then(
    res=>{
        console.log(res)
    }
).catch(error => {
    console.log(error)
})