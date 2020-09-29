/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

function translatePigLatin(str){
var vowel = 'aeiou';
var match = -1;
var index = -1;

    for (var x = 0; x < str.length && match < 0; x++){
    match = vowel.indexOf(str.charAt(x));
    if (match >= 0){
        index = x;
    }
    }
    if (index > 0){
    str = str.slice(index) + str.substring(0 , index) + 'ay';
    } else {
        str = str.slice(index) + str.substring(0 , index) + "ay";
    }
    return str;
}
console.log(translatePigLatin("chicken"));
console.log(translatePigLatin('blicky'));
console.log(translatePigLatin('bacon'));
console.log(translatePigLatin('Clay'));
console.log(translatePigLatin('eleven'));

https://www.brav3.net/blog/freecodecamp/frontend/javascript/fcc-pig-latin-javascript-intermediate-algorithm/