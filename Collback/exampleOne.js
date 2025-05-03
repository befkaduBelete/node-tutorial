function display(name, callback){
    console.log(name)
    callback();
}

function message(){
    console.log("Hello This is Callback function")
}

display("Bob",message)