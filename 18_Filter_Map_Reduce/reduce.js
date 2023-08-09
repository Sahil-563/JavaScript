//reduce
//Mostly used in shopping cart applications

const arr=[1,2,3]
const total=arr.reduce(function(acc,currval){
    console.log(`accvalue: ${acc} , currval: ${currval}`);
    return acc+currval
 },0 /*initial value of accumulator*/)

 console.log(total);

 //reduce method with Array of Objects using arrow function
 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice);
