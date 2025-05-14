function handleUserData(error, user) {
  if (error) {
    console.log("Error :" + error);
  } else {
    console.log("User id :" + user.id  +" USER NAME :" +user.name);
  }
}

function userFilter(userId, callback) {
  setTimeout(function () {
    const users = {
      1: { id: 1, name: "Befkadu" },
      2: { id: 2, name: "Tena" },
    };
    const user = users[userId];
    if(user){
        callback(null, user)
    } else{
        callback("User not exist", null)
    }
  }, 5000);
}

userFilter(1,handleUserData)
