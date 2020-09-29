let url = 'https://rickandmortyapi.com/api/character/';

const morty = document.querySelector('morty')
const mrpoopybutthole = document.querySelector('mrpoopybutthole')

fetch('https://rickandmortyapi.com/api/character/avatar/2.jpeg')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('morty').src = URL.createObjectURL(blob);
});


fetch('https://rickandmortyapi.com/api/character/avatar/244.jpeg')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('mrpoopybutthole').src = URL.createObjectURL(blob);
});

// https://rickandmortyapi.com/api/character/244