function display(name, callback){
    console.log("This is before time out")
    setTimeout(function(){
        console.log("This is function asysncronization ")
        setTimeout(function(){
            callback()
        },5000)

    },5000)
    console.log("Hi ", name + " After callback function")
}

function message(){
    console.log("This is the function for callback")
}


display('Befkadu', message)