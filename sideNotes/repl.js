//!  Repl 1.1 Challenge:

/*
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
        function console.log{
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


        for(var i = 0; i <= 10; i++) {
            console.log(i);
            }
        let number = i;

if(number === 0) {
    console.log('the number is even');
} else if (i % 2 === 0){
    console.log('the number is even');
} else {
    console.log('the number is odd')
}

*/


//! Repl 1.2

let movie = {
    nameOfMovie: "Bee Movie"
    runTime: '95'
    characters: [
      {charOne: name="Barry B. Benson", age:21, {itemOne: stinger},{itemTwo: honey},
      [ {charTwo: name= "Vanessa Bloome", age:25, {itemOne:'flowers'},{itemTwo: 'tennis ball'}; 
      genre: comedy
  ````}


  console.log: nameOfMovie
  console.log: runTime
  console.log:characters
  console.log:Vanessa,itemOne


//? Correct way


  let movieObject = {
    nameOfMovie: 'Bee Movie',
    runTime: 95,
    characters: [
        {
            name: 'Barry B. Benson',
            age: 21,
            items: [
                {itemOne: 'stinger'},
                {itemTwo: 'honey'},
            ],
        },
        {
            name: 'Vanessa Bloome',
            age: 25,
            items: [
                {itemOne: 'flowers'},
                {itemTwo: 'tennis ball'},
            ]
        },
    ],
    genre: 'Comedy',
  }

  console.log (movieObject.nameOfMovie);
  console.log (movieObject.runTime);
  console.log (movieObject.characters);
  console.log (movieObject.characters[0].name);
  console.log (movieObject.characters[0].items[0].itemOne);