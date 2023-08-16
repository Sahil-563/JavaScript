const randomColor=function () {
    const hex='0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
};
var changeId;
document.querySelector('#start').addEventListener('click',function () {
    if(!changeId){
        changeId =setInterval(function(){
            document.body.style.backgroundColor=randomColor();
        },1);
    }
       
       
},false);

document.querySelector('#stop').addEventListener('click',function () {
        clearInterval(changeId);
        changeId = null;
       
},false);