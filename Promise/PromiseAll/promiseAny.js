// Promise.any() takes an array of promises and:
// Resolves as soon as one of them fulfills
// Ignores all rejections
// Rejects only if all promises fail, with a special error: AggregateError

const getUser = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("All user ")
        },200)
    })
}

const getPermission = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All Permission")
        },300)
    })
}


const getRole= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All Role ")
        },500)
    })
}

Promise.any([getUser(),getPermission(),getRole()]).then(
    res=>{
        console.log(res)
    }
).catch(
    error =>{
        console.log(error)
    }
)