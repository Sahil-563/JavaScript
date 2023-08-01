//Stack memory example:
// let name = "Sahil"
// let name2 = name
// console.log(name);
// console.log(name2);
// name2="Vishal"
// //Changes made in name2 will not be reflected in name1
// //beacause it is call by value
// console.log(name);
// console.log(name2);

//***********heap memory**********
let obj1 ={
    name:"Sahil",
    EmailId:"sahil2002ece@gmail.com"
}
let obj2 = obj1
obj2.name="Vishal"
//Changes made in obj2 will also reflect in obj1
//Because it is call by reference
console.log(obj1.name);
console.log(obj1.name);

