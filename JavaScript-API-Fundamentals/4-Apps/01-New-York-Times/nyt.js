const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1   Declare Base URL
const key = 'liIcI8VeNLRXA9yRqFlsNU1Rp1adEA74'; //2
let url; //3

// SEARCH FORM   Set up variables that reference all the DOM elements that will be manipulated
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prv');    // changed from .prv
const nav = document.querySelector('nav');

//!
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

// RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';    // hides the "Previous/Next" page buttons while the page loads

//let pageNumber = 0;
//let displayNav = false;    // Pagination and Display

        //1  target search form    //2  HTML Form Event
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);   //3   Click event
previousBtn.addEventListener('click', previousPage); //3   Click event


                    //1   Event handling function
function fetchResults(e){
    e.preventDefault();    //2   // Make sure a request isn't actually sent  GET/POST
// Assemble the full URL
url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3 versatile query string
console.log("URL:", url);

if(startDate.value !== '') {      // Go to that input and put a value    Not empty
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;     // Adds to the URL
};
if(endDate.value !== '') {
    url += '&end_date=' + endDate.value;
};

//1  Request for info to the url
fetch(url)
.then(function(result) {
    console.log(result)
    return result.json();  //2   Promise containing a result object
    }).then(function(json) {
       displayResults(json);  //1 & //3   Another promise set off by the 2nd .then to send info      replaced console.log with displayResults
    });
}
//2   moved console.log to a displayResults function
function displayResults(json) {
    let articles = json.response.docs;

    if (articles.length === 10) {
        nav.style.display = 'block'; // shows the nav display if 10 itms are in the array
    } else {
        nav.style.display = 'none'; // hides the nav display if less than 10 items are in the array
    }

    while (section.firstChild) {
        section.removeChild(section.firstChild); // clears out any child elements that are in the section
    }
    

    if(articles.length === 0) {
    console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {    // Display the data
            let article = document.createElement('article'); //1   article variable creates a node in the DOM
            let heading = document.createElement('h2');      //2   heading variable
            let img = document.createElement('img');    //! 1  add image var that will create img element
            let link = document.createElement('a');  //1  create link variable using 'a' element
            let para = document.createElement('p');   //? 1    paragraph var that appends a p tag to DOM
            let clearfix = document.createElement('div');  //? 2    clearfix var that appends a div to DOM

            let current = articles[i];  //2   create current variable that holds data
            console.log("Current:", current);   //3   log current data to see it

            link.href = current.web_url; //4   grabs hyperlink for current article from json result; also sets value for the link.href each time we iterate
            link.textContent = current.headline.main;  //5   from json

            para.textContent = 'Keywords: ';  //? 3    textContent attribute to para variable

            for(let j = 0; j < current.keywords.length; j++) {   //? 4    iterate over current object; keywords aray
                let span = document.createElement('span');      //? 5  create a span for each keyword
                span.textContent += current.keywords[j].value + ' ';    //? 6  textContent for each span is keywords
                para.appendChild(span);                       //? 7   append each span to the para node
            }

            //! 2   Use a conditional to check the JSON for data
            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;  //! 3  concatenate a string w/ url
                img.alt = current.headline.main;    //! 4   alt if image isnt available
            }

            clearfix.setAttribute('class','clearfix');    //? 8   targeting clearfix class

            //? 9  add clearfix and para as children of article
            article.appendChild(heading);         //3    child node on that element
            heading.appendChild(link);   //6  appends a link as a child element in DOM
            article.appendChild(img);   //! 5    append img to article element for each item
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);         //4    pass in the article to that section
        }
    }
};

/*
1. We make the fetch request.
2. We pass in the NYT url.
3. We create a promise .then that returns a response object called result.
4. The promise asynchronously returns a function that converts the result into usable json format - result.json() is that function call.
5. We create a second promise that has a function that takes in the json object.
6. We log the json object for now.
*/


function nextPage(e){
    console.log("Next button clicked");   //5
    pageNumber++;     //! 1   increase value of pageNumber var
    fetchResults(e);    //! 2    rerun fetchResults function
    console.log("Page number:" , pageNumber);    //! 3   print pageNumber var to see it increment
};

function previousPage(e) {
    console.log("Next button clicked");   //5
    if(pageNumber > 0) {  //! 1    User should be at first page  page 0
        pageNumber--;    //! 2     if page number is over 0, we decrement the page number by 1
    } else {
        return;         //! 3       if the value is 0, return nothing
    }
    fetchResults(e);    //! 4    if value isnt 0, decrement page number and run fetchResults again
    console.log("Page:", pageNumber);     //!  5
};