// document.getElementById('owl').onclick=function(){
//     alert('Owl clicked');
// }
//The above way is the older way

//The Lower One is the best approach
//e object contains:--
//type,timestamp,defaultPrevented,target,toelement,srcElement
//currentTarget,clientX,clientY,screenX,screenY
//altKey,ctrlKey,keyCode,shiftKey,

// document.getElementById('owl').addEventListener('click',function(e){
    
// },false)


//eventPropagation:--- Means how our propagation of events will take palce?
//Its value can be:----false/true 
//It can be event Bubblling and event capturing
//Consider an example in which we are capturing two events:--

document.getElementById('images').addEventListener('click',function(e){
    console.log("You clicked inside the ul");
},false)
document.getElementById('owl').addEventListener('click',function(e){
    console.log("You clicked on owl");
    // e.stopPropagation() // We can also stop event propagation or in this case event bubbling
    //by calling a method on a particular event which is stopPropagation()
},false)

//Now ul contain owl so if we click on owl, Our external event which is we are applying on images will also be triggered
//And it will print the message which is You clicked inside the ul but before that You clicked on owl will be printed
//Because we have given eventPropagation as false means event bubbling is On 
//Event Bubbling means :-- Firstly inner event will take place then external take place
// But if Event Propagation is true:--
//then Event Capturing will take place
//Event Capturing means:--Firstly outer event will take place evenn if you clicked on the event which is inside that a particular event then inner event will be triggered

//Suppose if we want to prevent a particular event
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
},false);

document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
        
    
        
    })