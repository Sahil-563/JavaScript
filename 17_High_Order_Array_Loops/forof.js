//1. forof loop:
//On arrays
let arr=[1,2,3,4]
for (const nums of arr) {
    // console.log(nums);
}
//On Strings
const greetings="Hello world"
for (const greet of greetings) {
    // console.log(greet);
}
//On maps <maps only hold unique values>
const map = new Map()
map.set('IN', 'India')
map.set('EN', 'English')
map.set('IN', 'India')
// console.log(map);
for (const [key,values] of map) {
    console.log(key,':-',values);
}
//forof cannot be used with objects