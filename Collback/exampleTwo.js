function display(name, callback,callbackTow)
{
    console.log("Name", name)
    callback();
    callbackTow("This is message form callback function Two")
}

function messageOne(){
    console.log("This is a message form callback")
}

function messageTwo(message){
    console.log(message)
}


display("Befkadu", messageOne,messageTwo)