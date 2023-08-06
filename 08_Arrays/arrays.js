     //Arrays:===:--
   //Declearing an array:
//There are two methods by which arrays can be decleared
//1:--
const arr=[1,2,3,4,5];
console.log(arr);
//2:--
const arr1 = new Array(1,2,3,4);
console.log(arr1);

//Indexing always start from 0 in an array
//We can access the Elements of an array via their Index
console.log(arr1[3]);

//We can have different type of data in a single array as:
const arr2 = ["Sahil",1,true]
console.log(arr2[2]);


           //*****************Methods in Array *****************/
const arr3 = [1,2,3,4,5]
arr3.push(1)
console.log(arr3);
arr3.pop()

arr3.unshift(0) //Add value to the start of array by shifting other values
console.log(arr3);

arr3.shift() //delete value from the starting of array 
console.log(arr3);

//Questionary methods of JS
console.log(arr3.includes(0));
console.log(arr3.indexOf(0));

//Converting arrays to Strings with commaSeparated values
const newarr = arr3.join()
console.log(newarr);

//Splice And Slice:--
//Slice:---
const ar = [1,2,3,4,5,6,7]
console.log('Orginal array: ',ar);
console.log('Sliced array: ',ar.slice(0,5));
console.log('Orginal array: ',ar);
//Splice:---
console.log('Orginal array: ',ar);
console.log('Sliced array: ',ar.splice(0,5));
console.log('Orginal array: ',ar);

//concatinating two arrays in a Single array
const new_Arr = [1,2,3,4,5];
const new_Arr1 = [1,2,3,4,5];
const res_arr = new_Arr.concat(new_Arr1);
console.log(res_arr);

//Extracting multiple arrays which are inside an array into single array
const nested_Arr = [1,2,3,4,5,[6,7,8,9,[0,9,8,7]]];
const single_arr = nested_Arr.flat(2) //We can also pass Infinity as parameter
console.log(single_arr);

//We can ask that is it an array?
console.log(Array.isArray("Vishal"));
console.log(Array.from("Sahil"));