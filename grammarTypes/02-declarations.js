/*
* ********
! Variables
* ********
*/

console.log('hello');
// The console log is a debugging tool

let a = 2;

/*
- let : is KEYWORD
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign
    - numbers may follow the above characters, BUT cannot come first
    - javascript IS case sensitive - 'hello' and 'Hello', these would be different variables
    - no spaces are allowed in variable names
    - camelCase is the best practice for naming
    - ex:
        let myName = 'Clay';
        is easier to read than
        let myname = 'Clay';
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// let 4startsWithNumber = "Breaks";

console.log(startingWithLetter,_startingWithUnderscore,$startingWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/*
* KEYWORDS

var, let, and sonst

    - var: 'old' keyword for variable. ** We won't be using it as often but is still a viable one to use.

    - let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standardization of JS)

    - const: also "new" keword that decalres an UNCHANGABLE, or constant, variable
    */

    var variable = 'var variable';
    let letvariable = 'let variable';
    
    // let function = 1; Cannot use reserved words within a variable name - *function is a reserved word


    /*
    * ****
    ! DECLARATIONS & INTITIALIZATIONS
    */
   // Declarations are the LEFT SIDE of the assignment operator
   // let x;

   //Initializations are the RIGHT SIDE of the assignment operator
   // let x = 10

   //10 is our intitialization

   let y;
   console.log('declaration:', y);

   y = 10;
   console.log('initialization: ', y);

   y = 33;
   console.log('initialization 2: ', y);
    // var y

   // We've set our variable with our let keyword. With each iteration, we have redeclared what it is.

//? const

let today = "Great!";
const efa = 'Wonderful';
console.log(today, efa)

today = 'Awesome!';
console.log(today, efa);

// efa = 'Super';
console.log(today, efa);
// const allows us to make a variable that we don't want to change