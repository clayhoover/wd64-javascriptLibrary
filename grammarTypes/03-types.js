/*
* ******
! Types
* ******

? Data and Structure Types
* ******
    - Primitivve Data Types:
        - boolean
        - undefined
        - number
        -string
            - bigInt*
            - symbol*
    - null
    - object
    - function
*/

//? BOOLEANS
//* *****

// A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);

//? NULL
// A null value is an empty value. Think of it as an empty container that has space to fill

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    - Null is like a container with nothing in it
    - Undefined is when a variable has never been set, or hasn't been created yet
    - Null is intentional, you can trust as zero - Undefined not so much
*/

//? NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded);
// JS gives us space for 15 9's before rounding up

let notQuite = 0.2 + 0.1;
console.log(notQuite);
//JS rounds out at a certain number, so if math is needed, be aware

let whatIf = (0.2 * 10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log('.' + whatIf);

//? STRINGS

// Strings represent text and are wrapped in either single or double quotes
let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
let bothQuotes = 'I said, "What about Bob?"';
console.log(inception, singleQ, bothQuotes)

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other

console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operatoer called 'typeof' that returns a string that tells us exactly what our variable 'type' is

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);

// const log = console.log;  // We can reduce our typing by setting console log to a variable that doesn't change
// log("test");

//? OBJECTS
/*
    - Objects are used to store many values instead of a singular value
    - Consider these as a collection of various properties
    - Denoted by curly bracket; {}
*/

let frodo = {
    race: 'hobbit' , // string
//   (1)   (2)
    rings: 1, // number
    sting: true, // boolean
}

console.log(frodo);
console.log(typeof frodo);
//1: Key
//2: Value          LOOK AT THIS PART AND MAKE IT RIGHT!!

let obj = {
    key: 'value'
};

console.log(obj);

//? ARRAYS
/*

    - Containers that hold a list of itmes
    - Denoted by square brackets: []
    - All itmes are within the square brackets
    - Regardless of datatype, each item is seperated by a comma
*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three']
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own

//? ADDITION vs CONCATENTATION
/*
    - JS sees the "+" symbol in two different ways
        - When combined with numbers, uses built-in math functionality
        - when combined with string, it ignores the math and concats the two strings
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);


/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Clay";
let lastName = "Hoover";
let houseNumber = "18912";
let street = "Whitcomb Pl.";
let city = "Noblesville";
let zipcode = "46062";

console.log(firstName, lastName, houseNumber, street, city, zipcode);

//First attempt works!

/* Second attempt doesn't work  :c
let clayHoover = {
    firstName: 'Clay',
    lastName: 'Hoover'
};
let adress ={
houseNumber = "18912",
street = "Whitcomb Pl.",
city = "Noblesville",
zipcode = "46062"
}
let address = "houseNumber, street, city, zipcode"
console.log(clayHoover + address)
*/

// Class example
let firstName = 'Clay';
let lastName = 'Hoover';
let zipcode = 46062;
let houseNumber = 18912;
let street = 'Whitcomb Place';
let city = 'Noblesville';
let state = 'IN';

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode)


//? STRING PROPERTIES

/*
    - Strings have properties, or the qualities associated with that string
    - The length of a string is a property
*/

let myName = "Clay";
comsole.log(myName.length);

//? STRING METHODS
/*
    - Methods are tools that can help us manipulate our data
*/

let myName = "Clay";
console.log(myNameIs.toUpperCase());  // This is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase());

let home = 'My home is Noblesville';
console.log(home.includes('Noblesville'))