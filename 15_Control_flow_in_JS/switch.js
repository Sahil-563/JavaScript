// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=2
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;

    default:
        break;
}

//*Note:-- if break is not there in any block and the value matches but it execute code upto last block except default block


//Falsy values in JS
//false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN
//Truthy values in JS
//"0","false"," ",[],{},function(){}

//Checking an Array is Empty or not?
const emptyArr=[]
if(emptyArr.length==0){
    console.log("This is an Empty array");
}

//Checking an Object is Empty or not?
const emptyObject={}
if(Object.keys(emptyObject).length==0){//Object.keys(emptyObject) will return an array
    console.log("This is an empty object");
}

//Nullish Coalesing Operator(??): Works only with null,undefined
let val1
val1=10??null //10 will be assigned to val1
console.log(val1);
val1=undefined??20 //20 will be assigned to val1
val1=null??undefined //The one which is at right side that will be assignes to val1,in this case val1 will be assigned with undefined
console.log(val1);

//terniary Operator
//conditon ? true : false
const iceTeaprice=100
iceTeaprice >=80 ?console.log("More than 80"): console.log("less than 80");

