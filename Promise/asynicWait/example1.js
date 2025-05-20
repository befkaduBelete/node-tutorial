async function f1(){
    console.log("This is function with out await")
    return 42;
}

f1().then(
    result=>{
        console.log(result)
    }
)