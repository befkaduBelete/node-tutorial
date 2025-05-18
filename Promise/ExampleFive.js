function getUser(userId) {
  const users = {
    1: { id: 1, name: "Befkadu", age:36 },
    2: { id: 2, name: "Tena" , age:28},
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users[userId];
      if(user){
        resolve(user)
      }else{
        reject(new Error("No User Available"))
      }
    },1000);
   
  });
}

function getPostsByUser(userId) {
    // const userPost = {
        
    // }
//   return Promise.resolve([
//     { id: 101, title: "Post 1" },
//     { id: 102, title: "Post 2" },
//   ]);
    return Promise.reject(
        "User has no Post"
    );
}


getUser(1).then(
    res=>{
        console.log(res.name,res.id,res.age)
        return getPostsByUser(res.id)
    }
).then(res=>{
    console.log(res)
}).catch(error =>{
    console.log(error)
})