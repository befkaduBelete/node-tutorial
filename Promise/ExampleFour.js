function getEventNumber(num,delay){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          if(num%2==0){
            resolve(num)
          } else {
            reject(new Error("This is not even number "))
          }
        },delay)
    })
}



getEventNumber(4,1000).then(
    result =>{
        console.log("The number is even number and it is -", result)
        return getEventNumber(8,2000)
    }
).then(
    result =>{
        console.log("The number is even number and it is  -", result)
    }
).catch(error => {
    console.log("The number is not even number ", error)
})