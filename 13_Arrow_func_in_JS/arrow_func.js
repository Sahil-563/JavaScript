// Before learning about arrow function we must know about This Keyword
//This keyword gives the current context of variables

const user={
    username:"Sahil",
    price:200,
    welcomeMsg:function(){//defining a funciton inside an object
        console.log(`${this.username},Welcome to website`);
        console.log(this);//This line will print the current context or the current values of the variables
    }
    
}
user.welcomeMsg()
user.username = "vishal"
user.welcomeMsg()
console.log(this); //This will return an empty object but
                   //In brower the result will be different,the browser will return a Window object

//this cannot be used inside a funciton so we have to use arrow functon


//***********************Arrow Function*******************/
// Declearing a arrow function
//explicit return
const addTwo=(num1,num2) =>{
    return (num1 + num2) //**Imp: if we uses curly bracres then we have to use retunr keyword
}
console.log(addTwo(1,1));

//if we have only one line to return then another mothod by which we can declear an arrow function
const addOne = (num1)=>(num1+1)//**imp:-if we use paranthesis then no need to use return keyword
console.log(addOne(2));

//For object we must have to use implicit arrow function
//Means we have to use {} curly braces after paranthesis
const printUsername=()=>({username:"Sahil"})
console.log(printUsername());

//Declearing a arrow function without any variable
(num)=>{
    return num
}
console.log((1));