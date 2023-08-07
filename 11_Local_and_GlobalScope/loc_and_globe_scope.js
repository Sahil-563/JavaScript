//Local and Global Scope

// a , b , c have global scope
// let a =10
// const b=20
// var c = 30
if(true){
    console.log(a);
    console.log(b);
    console.log(c);
    //So it can also be used inside a block or local scope
}

//This is local scope
if(true){
    let a =20
    const b=30
    var c =40
}
// console.log(a); //a will not print because a is in local scope
// console.log(b); //b will not print because b is in local scope
console.log(c); //c will be printed even it is in local scope
                //which means var always takes global scope