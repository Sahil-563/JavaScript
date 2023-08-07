//If we want to a function immediately we use iife
(function ikdm(){
    console.log("Print ho ja ik dm");
})
();

//Making arrow function iife
((name)=>{console.log(`${name} dobara ikdm print kro`);})
("Sahil");

//Named iife
(function print(){
    console.log("DB connected");
})
()//execution