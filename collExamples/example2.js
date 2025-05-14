function printInfo(name, callback){
  setTimeout(function(){
   console.log("Printing info for " + name)
   callback("Please call me back ...")
  },2000)
}

function displayMessage(mesg){
    console.log(mesg)
}

printInfo("Name", displayMessage)