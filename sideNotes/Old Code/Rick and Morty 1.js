fetch('https://rickandmortyapi.com/api/character/avatar/2')
.then(function(response) {
   if (!response.ok){ 
    console.log(response);
    return new Error(response);
}
console.log("Response:", response);
  return response.blob(); 
})
.then(function(photoBlob) {
  console.log("My Blob:", photoBlob)
  var objectURL = URL.createObjectURL(photoBlob);
  console.log("Object URL:", objectURL);
  
createObjectURL('https://rickandmortyapi.com/api/character/avatar/2') = URL.createObjectURL(photoBlob);

//console.log("randomImage.src:", randomImage.src);
})