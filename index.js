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
    var charNum = {};
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
            console.log("leap year");
        }else{
            console.log("Not leap year");
        }
    }else{
        console.log("leap year");
    }
}else{
    console.log("Not leap year");

}