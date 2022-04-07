var myName = ""+"";
console.log(typeof(myName))

var myAge = true-true;
console.log(typeof(myAge))

function myage(){
    console.log('hell');
}
myage();

// Fibonacci Series Up to n Terms

const num = 7;
let n1 = 0, n2 = 1, nextTerm;

for (let i = 0; i < num; i++) {
    // console.log(n1);   
    nextTerm = n1+n2;
    n2 =n1;
    n1 =nextTerm;
    
}

// calculate the repeated max number of chars in string

function repeatedChars(str){
   ; var charNum = {};
    for(char of str){
        if(charNum[char]){
            charNum[char]++;
        }else{
            charNum[char] = 1;
        }
    }
    var repeatedChar = Object.values(charNum);
    var highestRepeatedChar = Math.max(...repeatedChar);
    return highestRepeatedChar;

}

// console.log(repeatedChars('aaaaaaasdsadsadasdasdaa'));

// swap two numbers
var a = 10;
var b = 12;
var  c ;
c = a;
a = b;
b = c;


// swap two numbers without third variable

var a = 10;
var b = 12;

a = a+b;
b = a -b ;
a = a - b;

// console.log(a);
// console.log(b);

// find leap year
const year = 2100;
debugger;
if(year% 4 === 0){
    if(year% 100 === 0){
        if(year% 400 === 0){
            // console.log("leap year");
        }else{
            // console.log("Not leap year");
        }
    }else{
        // console.log("leap year");
    }
}else{
    // console.log("Not leap year");

}


// ternary operator

// it take 3 operands and this is only operator take 3 operands
// it is shortand version of if else statements
var age = 116;
age  = ( age >= 18 ) ? true: "must be 18 for vote.";
// console.log(age);


// switch statement

// find area of circle, trigle and rectangle
var area = "triangle";
var  l = 5; var b = 5; var r = 3; var PI = 3.142;
switch (area ) {
    case "circle":
        // console.log("area of circle"+ PI*r**2);
        break;
    case "triangle":
        // console.log("area of triangle"+ (l*b/2));
        break;
    case "circle":
        // console.log("area of circle"+ (l*b));
        break;
    default:
        // console.log("area not matched");
        break;
}

// while loops

var inc = 0;
// block scope means if condition true then only enter in the condition
while (inc <= 10) {
    // console.log(inc);
    inc++;
}

// do while loops first time you will get value if condition is false
var inc1 = 20;
do {
    // console.log(inc1);
    inc1++;
   
} while (inc1 <= 10);

// for loops

for (let fnum = 0; fnum <10; fnum++) {
    // console.log(fnum);
    
}
// table program
var tableNum = 12;
for (let fnum = 1; fnum <=10; fnum++) {
    // console.log(tableNum+'*'+fnum+'='+(tableNum*fnum));
    
}

// functions 

function sum() {
    let a = 10; let b = 12;
    let total = a+b;
    return total;
}
console.log(sum()); 