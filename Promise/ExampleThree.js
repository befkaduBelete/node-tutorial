function message(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false){
                resolve("This is true Message")
            }else{
                reject("This is error Message")
            }
        },2000)
    })
}


message().then(
    res=>{
        console.log(res)
    }
).catch(error=>{
    console.log(error)
})