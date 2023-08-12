const button=document.querySelectorAll(".button") 
const body=document.querySelector("body")
button.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e.target);
        // if(e.target.id==="grey"){
        //     body.style.backgroundColor="grey"
        // }
        // if(e.target.id==="white"){
        //     body.style.backgroundColor="white"
        // }
        // if(e.target.id==="yellow"){
        //     body.style.backgroundColor="yellow"
        // }
        // if(e.target.id==="green"){
        //     body.style.backgroundColor="green"
        // }

        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor="grey"
                break;
            case "white":
                body.style.backgroundColor="white"
                break;
            case "yellow":
                body.style.backgroundColor="yellow"
                break;
            case "green":
                body.style.backgroundColor="green"
                break;
        
            default:
                break;
        }
    })
})