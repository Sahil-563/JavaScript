//Singleton Objects
//Creating a object using constructor
const tinder = new Object();
tinder.name ="Sahil"
tinder.id="123abc"
tinder.isLoggedIn = false;
console.log(tinder);

//Declearing a object inside an Object
tinder.newUser={
    anotherUser: {
        FirstName: "Sahil",
        LastName: "Bhardwaj"
    }
}
console.log(tinder);
console.log(tinder.newUser.anotherUser.FirstName);
//Optional Chaining in Js
//This is used in API calls
console.log(tinder.newUser?.anotherUser.FirstName);

//Concatinating two objects in a single object
//We can use assign operator as well as spread operator
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
const res_obj = Object.assign({},obj1,obj2);
console.log(res_obj);
//We can also use spread operator
const obj3 = {...obj1,...obj2};
console.log(obj3);


//Values comming from a Database is in Array of object form as:
const DB_value=[{name:"Sahil",age:20}]
console.log(DB_value[0].age);

//To have all the keys of an Object
console.log(Object.keys(DB_value));  //return datatype is array
//To have all the values of an Object
console.log(Object.values(DB_value)); //return datatype is array
//To have all the key value pairs
console.log(Object.entries(DB_value)); //return datatype is arrays

//To see that a paricular value exists in an object or not
console.log(tinder.hasOwnProperty("name"));

