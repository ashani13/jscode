// ECMASCRIPT is created in 1997 its the offical name of JS
// ECMASCRIPT 2015 is imp named as ES6

//  var => function scope
//  let & const => block scope

function bioData(){
    var myName = "ashani";
    // console.log(myName);
    if (true) {
        let lastName = "kapoor";// let variables cant access outer env of if 
        // console.log(myName + ' ' + lastName);
    }
}
bioData();

// template literals(template strings)
var tableNum = 12;
for (let fnum = 1; fnum <=10; fnum++) {
    //  console.log(`${tableNum} * ${fnum} = ${tableNum * fnum} ` );
}

// default params

function multi(a,b=6){
    return `the multiple of ${a*b}`;
}
// console.log(multi(5));

// Arrow function(fat arrow fn)
const arrowFun1 = () => {
    return `the multiple of ${3*5}`;
}
const arrowFun = () =>  `the multiple of ${3*5}`; // for single line  you dont need to return and {} braces
// console.log(arrowFun());

// Array and first element is called lower index/boundry and last called upper index/boundry
// var myFriends = new Array;

var myFriends = ['ajay', 'sanjay', 'aman'];
// console.log(myFriends[myFriends.length - 1]);

// Traversal of an array & length of the array

var myFriend = ['ajay', 'sanjay', 'aman'];
// console.log(myFriends);
// console.log(myFriends.length);

// For in loops to find the index number of elements

for(let i =0; i < myFriend.length; i++ ){
    // console.log(myFriend[i]);
}
for(let elements in myFriend){
    // console.log(elements);
}

// for of loop it return the values of the array
for(let elements of myFriend){
    // console.log(elements);
}

// foreach loops

myFriend.forEach(function(element, index, array){
    // console.log(element);
});

myFriend.forEach((element, index, array) => {
    // console.log(element);
});

// searching in fiter an array

// Array.prototype.indexOf() if element not found then return -1

console.log(myFriend.indexOf("aman", 1));