/*
* *****
! FOR LOOPS
* *****
    - Loops help us repeat a process without writing a lof of code

    We need to:
    1) Create an Index
    2) Run a condition
    3) Change to the indexing variable (execution of condition)

*/

for(let i = 0; i <= 10; i++) {
    console.group(i);
}

/*
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against
            (index; condition; change index -> result)

            for (<create index variable>; <run condtion>; <change index>) {
                <retun results>
                *will cont. until run condition is met.
            }
*/
/*
let x = 20;
let i = 10;

for(i = 10; i<= x; i++) {
    console.log(i);
}
*/

//! CHALLENGE:
//* Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

for(let i = 2; i>= -10; i -= 4) {   // i -= 4 : i = i - 4
    console.log(i);
}

let word = 'supercalifragilisticiexpialidocious';

for(let i = 0; i < word.length; i++) {
    console.log(i, word[i]);
}

/* 
* ******
! FORIN LOOP
* ******
*/

let city ={
    name: 'Indinapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/*
    for (variable IN object) {
        <statement>
    }
    */

    let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

    for(item in list) {
       // console.log(item);  
        console.log(list[item]);
    }

    //! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';

    function toTitleCase (name) {
        console.log(name);
    }
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';

let fullName;

for(char in name) {
   // let lowChar = name[char].toLowerCase();
   // console.log(lowChar);
   // console.log(char);
   char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
}

console.log(fullName);

/*
* ******
! FOROF LOOP
* ******   
    - In order to run a FOR OF loop, the "thing" must be numbered like an array.

    let object = {
        key: value,
        key: value,
        key: value
    };

    for (o of object) {
        <breaks>

    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/*
? Quick Recap:
    for loop: loops through a block of code until the counter reaches a specified number.
    for in loops: loops through properties of an object.
    for of loops: loops over iterable objets as n arrays and strings *strings can be accessed much in the same way as arrays
*/