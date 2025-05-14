function greet(name, callback){
    console.log("Hello !!!",  name)
    callback();
}

function welcome(){
    console.log("Welcome !!!")

}

greet("Name", welcome)