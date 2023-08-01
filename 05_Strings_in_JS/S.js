let name0="Sahil"
let school="RVCP"
let job="Software Engineer"
//Using String Concatination
console.log(`My name is ${name0},I studied in ${school} and i want to become a ${job}`);

//Another way of declearing a String
const gameName = new String('LUDO')
console.log(typeof gameName);
console.log(gameName.__proto__); //This will return multiple methods that a String can perform

//Different methods for String
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('L'));

//Some More Interesting Methods
console.log(gameName.substring(0,2));
//NOTE:-- Substring cannot start from negative index
console.log(gameName.slice(-5,-1));

/******************Trim ****************/
let name ="    Sahil"
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());

//replace:
let name2 ="sahil"
console.log(name2.replace('a','h'));

//Converting string to array
let str = "sahil,vishal,ishan"
console.log(str.split(','));
