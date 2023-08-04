// Declearing a Function
function myfunc(){
    console.log('S');
    console.log('A');
    console.log('H');
    console.log('I');
    console.log('L');
}
console.log(myfunc());

//Creating a function to add two numbers
function addTwoNums(number1,number2){//These are arguments
    console.log(number1+number2);
}
const res=addTwoNums(1,2);
//Now if we print res then we will have undefined because the function is not returning anything to res
console.log(res);

//So we have to return something from the function
function subtractTwoNums(number1,number2){
    return number1-number2;
}
const res1 = subtractTwoNums(1,2);
console.log(res1);//Now the problem of undefined will not be there

//Different forms by which we can give values to parameters
// Or what if userpass nothing as an argument to a function
// So we can use if block to check that the argument is undefined ot not

function isloggedin(username){
    if(username===undefined){
        console.log('Please enter name');
        return
    }
    return `${username} just logged in`
}
console.log(isloggedin());



