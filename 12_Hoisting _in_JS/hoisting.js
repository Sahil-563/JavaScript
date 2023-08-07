//Nested function Sccope
// function one(){
//     const usernames ="Sahil"
//     function two(){ //Nested functions are also known as clousers
//         const hobby="Coding"
//         console.log(usernames);
//     }
//     // console.log(hobby);
//     two()
// }
// one()
//For the execution of inner function outer function should be executed first

//Nested if scope
// if(true){
//     const usernames ="sahil"
//     if(usernames=="sahil"){
//         const website ="hashnode"
//         console.log(usernames+website);
//     }
//     console.log(website); //This will throw error because of local scope of website
// }
// console.log(usernames); //This will throw error because of local scope of username


// ++++++++++++++++++++++++++ Interesting+++++++++++++++++++++
//Hoisting in JS
console.log(addone(2));//This is a hoisted function
function addone(num){
    return num+1
}

console.log(val(3));
function addTwo(num){ //This function is not hoisted
    return num+2
}


