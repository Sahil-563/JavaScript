 //Object Literal
//Object DS is a combination of of key value pair
//This is Object Declearation

//Defining a symbol in a object literal
const mysym = Symbol("key1");
const myObj = {
    [mysym]: "mykey",
    "Profession":"Software Engineer",
    0:0,
    1:"Sahil",
    age:20,
    isloggedin:false,
    workOutDays:["Monday","Tuesday"],
}

//Two ways by which we can print our function
//Or we can access our object of function
console.log(myObj[1]); //This is the best way
console.log(myObj.isloggedin); 
console.log(myObj.Profession);
//Printing Symbol
console.log(myObj[mysym]);
console.log(myObj);

//Changing the value of objects of myObj
myObj.age=21;
console.log(myObj.age);

//Now if we want to freeze our object
// Object.freeze(myObj);
myObj.workOutDays=["Only Sunday"];
console.log(myObj.workOutDays);

//Declearing a function as an Object of myObj
myObj.greeting=function(){
    console.log("hello,this is a Function");
}
console.log(myObj.greeting());

//Declearing a function as an Object 
//of myObj and also giving reference to that funciton from the myObj Objects
myObj.greetingTwo = function(){
    console.log(`This is a new object which is actually a function which is giving reference to an object of myobj as ${myObj.age}`);
}
console.log(myObj.greetingTwo());

