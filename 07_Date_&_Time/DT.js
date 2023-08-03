//Date:--
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
//Date have object datatype
console.log(typeof mydate);


//Creating or declearing own Date
let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

//Another way of creating a Date
let newDate = new Date("2020-01-23")
console.log(newDate.toDateString());

let newDate1 = new Date("01-01-2002");
console.log(newDate1.toLocaleString());

//Now if you want to Calculate TimeStamps betwenn two dates
//Then:
let myTimeStamp = Date.now()
console.log(myTimeStamp);//This ,miliSecond Value is from 1st jan 1970 to till now
//Now we can have the miliseconds from our own created date
console.log(myCreatedDate.getTime());
//Converting Miliseconds to seconds
console.log(myCreatedDate.getTime()/1000);
console.log(Date.now()/1000);//This will return a decimal value so:--
console.log(Math.floor(Date.now()/1000));

//To Extract months days from a date:==
let date = new Date()
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

//LocaleString is an Intresting methods because in this we can pass objects
date.toLocaleString('default',{
    weekday:"long"
})