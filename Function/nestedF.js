function outer(){
    console.log("Outer Function")
    function inner(){
        console.log("Inner Function ")
        function innerMost(){
            console.log("Inner Most")

        }
       innerMost()
    }
    inner()
}

outer()

  