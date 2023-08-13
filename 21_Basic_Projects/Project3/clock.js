const clock = document.getElementById('clock');


// we cannot use loop
setInterval(function(){
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)