           //*************Arrays and Objects in JS*/

//Suppose we donot know the number of Arguments
// So we will use rest or spread operator which is this:-(...)

function addTocart(...itemsPrice){ //... is rest operator
    return itemsPrice
}
console.log(addTocart(100,200,300));//We will have an array

//What if?:
function add(num1,num2,...nums){
    return nums
}
console.log(add(100,200,300,400));//First two values will go in num1 and num2 and the 3rd value will go in an array of nums

//Passing object in a function
const user={
    username:"Sahil",
    hobby:"Coding",
}


function handleObject(anyObject){
    console.log(`My username is ${anyObject.username} and My hobby is ${anyObject.hobby}`);
}
handleObject(user);
//Now the problem arises when you pass .usernames or there is spelling mistake in instance of object which is passed inside a function
//So we have to use typeaScript or if else conditions

//Another way of passing object in a function
//In this method we donot have create a user object
handleObject({
    username:"Vishal",
    hobby:"Coding",
})

         //Passing arrays as arguments in a function
const arr1 = [1,2,3,4,5]
function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(arr1));

//Another way of passing array in a function
console.log(handleArray([0,9,8]));

//makling a function that can accept multiple arrays
function handleMultipleArrays(...getArrays){
    return getArrays[1]
}
console.log(handleMultipleArrays([1,2,3,4],[5,6,7,8]));


 