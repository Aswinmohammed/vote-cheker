var input = document.getElementById("age")
var output = document.getElementById("output")

function checkEligible(){
    
    if (input.value === "" ){
        output.innerHTML = "Enter valid number";
        return;
    }

    if(parseInt(input.value) >= 18) {
         output.innerHTML = "Eligible for voting"
    }
    
    else{
        output.innerHTML = "Not Eligible for voting"
    }

    clear()
}

function clear(){
    input.value = ""
}

