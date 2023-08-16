//Promises are creared or Promises are consumed
//Creating a Promises
// const promiseOne = new Promise(function(resolve, reject) {//Promise takes a callback function which can be resolved or rejected
//     //Do an async task
//     //DB calls,crypto tasks
//     // setTimeout
//     setTimeout(function() {
//         console.log("Async task is completed");
//         resolve(); //If the task is completed only then resolve will take place
//     },2000)

// })
// promiseOne.then(function(){ //then is directly connected to resolve
//     console.log("Promise consumed");
// })


//Another way of creating a promise and consuming it
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task2 is completed");
//         resolve()
//     },3000)
    
// }).then(function(){
//     console.log("Async task2 is resolved");
// })

//Suppose if we want to have data from resolve to then so we can do so by:--
// const promise_3 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve({user:"sahil",password:"23232"})  
//     },3000)
// })
// promise_3.then(function(user){
//     console.log(user.user);
// })

//then and catch 
//catch is assosiated with errors
// const promise_4 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//         resolve({username:"Sahil",age:23})
//         }
//         else{
//         reject("Sorry,Something went wrong")
//         }
//     },5000)
    
// })
// promise_4.then((user)=>{
//     console.log(user);
//     console.log(user.username);
// }).catch((error)=>{
//     console.log(error);
// })

//chaining of then and catch
// const promise_4 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//         resolve({username:"Sahil",age:23})
//         }
//         else{
//         reject("Sorry,Something went wrong")
//         }
//     },5000)
    
// })
// promise_4.then((user)=>{
//     console.log(user);
//     return (user.age)
// }).then((age)=>{
//     console.log(age);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("Finally done"))

//finally:-- this is used to tell that either resolve or reject has been completed
//finally is printed each time

//We can also handle errors or resolve or reject them using async await
// const promise_5 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//         resolve({username:"Sahil",age:23})
//         }
//         else{
//         reject("Sorry,JS went wrong")
//         }
//     },5000)
    
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promise_5//Here we donot know that either reject camed or resolve camed so we had put it into try catch block
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

//Worling on API
//Using fetch keyword:-- in async await
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data=await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

//Handeling api using then catch
fetch('https://api.github.com/users/hiteshchoudhary').then(function (response) {
    return response.json();
}).then (function(data){
    console.log(data);
}).catch(function(e){
    console.log("error",e);
})