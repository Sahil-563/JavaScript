//forin loop:-- 
//1:-forin loop on Objects
const myObj = {
    js:'JavaScript',
    py:'Python',
    cpp:'C++',
    rb:'ruby',
    java:'java',
}
for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}
//2:-On Array
const programming = ["cpp","java","python"]
for (const key in programming) { //In array forin loop returns a key but in forof looop the value of that arrays is returned
    console.log(key);
}
