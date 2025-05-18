function function1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data = [1,2,3,4,5];
         resolve(data)
        },2000)
    })
}
function function2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data = [6,7,8,9,10];
         resolve(data)
        },1000)
    })
}
function function3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         const data = [11,12,13,14,15];
         resolve(data)
        },3000)
    })
}

Promise.all([function1(),function2(),function3()]).then(res=>{
    console.log("This is collected data :- ",res)
}).catch(error=>{
    console.log(error)
})