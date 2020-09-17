let x = 10;
console.log(x);

//! 1: getElementId

// console.log(document);
// console.log(document.body);

// document.getElementById('testParagraph').style.color = 'blue' ;

let testPara = document.getElementById('testParagraph');
testPara.style.color = 'red';
console.log(testPara);
//console.dir(testPara);

// Will only get the first ID

//! 2: Queary Selector All & innterText/inner/HTML

console.log(document.querySelectorAll('p.sampleClass'));
// querySelectorAll returns a Nodelist
// nodes are items in HTML like elemets and text

document.querySelectorAll('p.sampleClass')[2].innerText = 'My Text has Changed!';
document.querySelectorAll('p.sampleClass')[2].id = 'numThree';
console.log(document.querySelectorAll('p.sampleClass')[2]);
// bracket notation to access the array of elements.
// innerText allowas us to reference or change the text in that element.

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    pTag.innerText = 'My text has changed using a forEach () method.';
    // pTag.innerTextContent = 'My text has changed using a forEach()method.';
    // pTag.innerHTML = 'My text has changed using a forEach()method.';
});

let showSpan = document.getElementById('spanTest');

console.log(showSpan.innerText);     // ????
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*

- innerText simply reference or allows us to change the text of a specified elemt. Will return only visible text in a 'node'.

- textContent does the same thing that innerText does, but will return the FULL TEXT of a 'node'.

- innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML element we're referencing.
*/

//! 3: ADDEVENTLISTENER - click
let btn = document.getElementById('clickThis');

console.log(btn)

// btn.addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue';
//     event.target.innerText = 'CLICKED'
//     console.log(btn)
// });

/* 
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/

// btn.addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue'
//     function onClick(
//     event.target.style.backgroundColor ='red')
// })



let red = true;
btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' :
    'red';
    red = !red;
});

//! 4: ADDEVENTLISTENER - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target.value);
   // console.log(document.getElementByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'Something Changed!';

    if(e.target.value == ''){
        document.getElementsByTagName('p')[1].innerText =
        'Nothing has been typed...'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
    }
});