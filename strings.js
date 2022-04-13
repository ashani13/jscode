//  Strings 
let myName = "Ashani"

// using constructor
let myAge  = new String("My age is 23");

// console.log(myAge.length);

//  escape() charactor
//  use // for string

//  indexOf 

// const myBioData = "Am ashani kapoor learning js";
// console.log(myBioData.search("kapoor"));

//  Extracting string parts

//  slice() and it not include ends 
let str = "Apple, Banana, Kiwi";
// console.log(str.s0lice(0, 5));


//  challenge time

let tweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
let myActualTweets = tweets.slice(0, 280);
// console.log(myActualTweets);

//  substring() similar to slice but its not accept negative index.

// substr() but the second params specifies the length of the extracted part

// console.log(str.substr(0, 4));




//  Replacing string content replace()
const myBioData = "I am ashani kapoor learning js";

// console.log(myBioData.replace("ashani", "Ashani"));