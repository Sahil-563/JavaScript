// const coding =["JS","c++","java","python"]
// const value= coding.forEach((items)=>{
//     return items
// })
// console.log(value);

//* forEach donot return any value but sometimes we need a value
//For that:--
//We Use filter
// const nums=[1,2,3,4,5,6,7,8,9]
// const newNums=nums.filter((items)=>{
//     return items>4
// })
// console.log(newNums);

// //To return a new array from a forEach loop we can:--
// const newArray=[] //Initializing an Empty Array
// nums.forEach((item)=>{
//     if(item>4){
//         newArray.push(item)
//     }
// })
// console.log(newArray);

//**********Applying filters on array of objects**************
//From database these type of values comes
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks=books.filter((bk)=>{
    return bk.genre ==='Non-Fiction'&& bk.publish ===1989
})
console.log(userBooks);
