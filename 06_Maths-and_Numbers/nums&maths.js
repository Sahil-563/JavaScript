    //Defining a number
//1st way:
const score =400
console.log(score)
//2nd way:
const balance = new Number(200)
console.log(balance)

//********Different methods and functions supported by Numbers**********/
//1: toString
console.log(balance.toString().length);
//2: todixed
console.log(balance.toFixed(2));//Fixex that how much values we will have after decimals
//3: Precision
let value =123.56565
console.log(value.toPrecision(3));//Convert a value to a precise value but count upto decimals
//4: toLocaleString
let newValue = 10000000
console.log(newValue.toLocaleString());// Helps to count the zeros in a particular number
console.log(newValue.toLocaleString('en-IN'));


                //******Maths in js********/
//1: abs:--This returns the absolute value
console.log(Math.abs(-4));
//2: round:--This returns the rouond off value
console.log(Math.round(4.59797));
//3: ceil:--This returns the ceil value instead of rounding off
console.log(Math.ceil(4.1));
//3: ceil:--This returns the floor value instead of rounding off
console.log(Math.floor(4.1));
//4: max:-- returns the max value in an array
console.log(Math.max(34,6,6,7));
//5: max:-- returns the min value in an array
console.log(Math.min(34,6,6,7));
//6: random:-- returns the random value ranges from 0 to 1
console.log(Math.random());

//now overcoming the problem of random if we want to add a range from which we want to print numbers
//for that:
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);