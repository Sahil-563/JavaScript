const form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    const bmi = (weight/((height*height)/10000)).toFixed(2);
    if(height<0||isNaN(height)){
        result.appendChild(document.createTextNode("Please Enter a Valid Height"))
    }
    else if(weight<0||isNaN(weight)){
        result.appendChild(document.createTextNode("Please Enter a Valid Weight"))
    }
    else{
        result.innerHTML=`<span> Your BMI IS:-${bmi}</span> <br>`;
        if(bmi<18.6){
            result.appendChild(document.createTextNode("You are UnderWeight"))
        }
        else if(bmi>30){
            result.appendChild(document.createTextNode("You are OverWeight"))
        }
        else{
            result.appendChild(document.createTextNode("Your BMI is Normal"))
        }
    }
    
    
})