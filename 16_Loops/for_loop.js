//for:--
//Basic Structure:--
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=0; i<=10; i++) {
//     console.log(i);
// }

//if with loop
for(let i=0; i<=5; i++) {
    const ele = i;
    if(ele == 5){
        console.log("5 is best number");
    }
    console.log(ele);
}

//Printing a table using for loop
for(let i=1; i<=10; i++) {
    const ele = 2;
    console.log(`${ele}*${i}=${ele*i}`);
}


//Break and continue
for(let i=0; i<10;i++){
    if(i==5){
        console.log("5 is detected just break the loop");
        break;
    }
    console.log(i);
}
for(let i=0; i<10;i++){
    if(i==5){
        console.log("5 is detected just skip 5");
        continue
    }
    console.log(i);
}