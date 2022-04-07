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
    return a*b;
}
console.log(multi(5));