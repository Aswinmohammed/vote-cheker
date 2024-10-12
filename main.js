var input = document.getElementById("age")
var output = document.getElementById("output")

function checkEligible(){
    if (input.value === '' || isNaN(input.value)) {
        output.innerHTML =  "Invalid Number! Check Your Input"
         input.value = ''
        }

    else if (input.value >= 18){
        output.innerHTML = "Eligible for voting"
        input.value = ''
    }

    else{
         output.innerHTML = " Not Eligible for voting"
         input.value = ''
    }
}


