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

// console.log(myFriend.indexOf("aman", 1));

// last index lastIndexOf()

// Array.prototype.includes()
// console.log(myFriend.includes('aman'));

// Array.prototype.find() and findIndex()
// when not matched find() return undefined and findIndex() returns -1
const price = [2,3,4,561,78,90];
// const findElem = price.find((curntVal, index, array)=>{
//     return curntVal < 78;

// });
const findElems = price.findIndex((curntVal) => curntVal <1);
// console.log(findElems);

// array.prototype.filter()
// return array of all data match to condition
const findElemUsingFilter = price.filter((curntVal) => curntVal > 90);
//  console.log(findElemUsingFilter);


// Array.prototype.sort()
const month = ['March', 'Jan', 'feb', 'Oct']
// console.log(month.sort());
// console.log(price.sort()); its bug sort method only work with string not sorting numbers

// CRUD operation

//  Array.prototype.push() push the value at the end of the array
// month.push("July")
// console.log(month);

//  Array.prototype.unshift() push the value at the first of the array
// price.unshift(5);
// console.log(price)

//  Array.prototype.pop() remove last element of array
// console.log(month);
// console.log(month.pop());
// console.log(month);
// console.log(month.pop());
// console.log(month);


//  Array.prototype.shift() remove first element of array
// console.log(month);
// console.log(month.shift());
// console.log(month);

//  Array.prototype.splice()  use to add and delete

const newMonth = month.splice(month.length, 0, "Dec");
//  console.log(month);
const indexNumber = month.indexOf('feb');
if(indexNumber != -1){
    const changeMonth = month.splice(indexNumber, 1, "Feb");
    // console.log(month);
}else{
    // console.log("Data not Found");
}

// map() method and it return new array and not modify original array and foreach modate the original array
//  it has ability of chainable like u can apply other method
const mapMethod = price.map((curntVal) => curntVal == 78);

const array1 = [1, 4, 9, 16, 25];
// console.log(mapMethod);
const newArr = array1.map((curntVal , index, arr) => {
    return `The ${index} of the value of ${curntVal} of ${arr}`;
});

const newArr1 = array1.forEach((curntVal , index, arr) => {
    return `The ${index} of the value of ${curntVal} of ${arr}`;
});
// console.log(newArr1);


// Sol 1
const array2 = [25,36,49,64,81];

let arrSqr = array2.map((curntVal) =>{
 return Math.sqrt(curntVal);
})
// console.log(arrSqr);

// multiply by 2 and return only value greater than 10
const array23 = [2,3,4,6,8];

let arrMultipleByTwo = array23.map((curntVal) =>{
    return curntVal * 2;
   }).filter( (curntVal) => {
       return curntVal > 10;
   }).reduce((accumulator,curntVal, inde, arr) => { 
    return accumulator*=curntVal;
});
    // console.log(arrMultipleByTwo);

// reduce method

//  take 4 arguments

let reduceArray = [5,6,2];
let sumUsingReduce = reduceArray.reduce((accumulator,curntVal, inde, arr) => { 
    return accumulator+=curntVal;
}, 7);

//   console.log(sumUsingReduce);
// accumulator storef first value of array
let items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

let flatrArray = items.reduce((accumulator, curntVal, index, arr) => {
    return accumulator.concat(curntVal);
})
// console.log(flatrArray);

