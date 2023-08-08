// while and do while

//while
// while (condition) {
    
// }

let arr = [1,2,3,4,5,6,7]
let i=0
while(i<arr.length) {
    console.log(arr[i]);
    i=i+1;
}

//do while:--
//isme kaam phel hoga condition baad m check hogi
let score =11
do {
    console.log(`Score is ${score}`); //Here the value of score is 11 so it is printed first then condition is checked
} while (score<=10);