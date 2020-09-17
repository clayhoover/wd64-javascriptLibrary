/*
* *****
! HOISTING
* *****

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
        - Only the declaration is pulled up, NOT the assignment.

*/

console.log(hoistedVar);

// console.log('How JS see hoistedVar: ', typeof hoistedVar);
// var hoistedVar = 'using var';
// let hoistedVar = 'using let';

//console.log(noVariable);


//? Hoisting in a Function
// This process is considered the same within a function. On the first pass, it reads it, pushes the declarations to the top and then executes them in the order that they are written.

function testHoist() {
    becomesGlobal ="not declared, it becomes part of the global scope";
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of wheather they are in a function or global scope. This makes it clear how it should be handled.

//? Using LET
// The keyword 'let is blockscoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Funciton
// Function Declaration:

hoistedFunc();

function hoistedFunc(){
    console.log('This is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}


for(var num = 0; num <= 10; num++) 
console.log(num);
function testNum(num){
if(num === 0){
    console.log('the number is even')
} else if(num % 2 === 0){
  console.log('the number is even');
} else if(num % 2 !== 0){
  console.log('the number is odd');
}
}

if (i % 2 == 1){


    for(var i = 0; i <= 10; i++) {
        console.log(i);
        }
        function testNum(x){
          console.log(x)
          let i = x
          if (i === 0){
          console.log("the number is even");
        } else if (i % 2 === 0){
          console.log("the number is even");
        } else {  
          console.log("the number is odd");
        }
        }