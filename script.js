function showresult(){


    var result = document.getElementById("result");
    result.value = "average is: "

    let sum = 0;

    for (let i = 0; i < 5; i++) {
        let inputValue = document.getElementById("input_" +i).value;
        if (inputValue == ""){
            alert("you should fill out all the feilds");
            return 1;
        }
        sum += parseFloat(inputValue); 
    }
    

    result.value += (sum/5);
}