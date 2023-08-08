//foreach
//foreach loop runs a callback function
const coding=["c++","python","java","javascript"]
//foreach with simple function
coding.forEach(function(val){
    // console.log(val);
})
//foreach loop with arrow function
coding.forEach( (items)=>{
    // console.log(items);
})

//If we hava defined a function first,then we can pass that function in foreach loop
function printMe(items){
    console.log(items);
}
// coding.forEach( printMe );//donot pass printMe() just give the reference of the function

//forEach loop comes up with 3 values
coding.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

//forEach loop with array of objects
const array_of_Obj=[{name: 'Sahil'}
                    ,{profession:'Coding'}]
array_of_Obj.forEach((objs)=>{
    console.log(objs.name);
} );
