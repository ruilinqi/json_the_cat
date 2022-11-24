const request = require("request");

const searchBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`; 

//console.log(url);
//console.log(localPath);

request(url, (error, reponse, body) => {
  console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  if (error) {
    console.log("Error.")
  };
  if (!searchBreed){
    console.log("Breed no found!");
  }
  if (!url){
    console.log("URL not found!");
  }
  // Convert the JSON string into an actual object
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  
  // Access the 1st entry of data array
  let breed = data[0];
  if (breed) {
    console.log(breed["description"]);
  }
  // Find the key, and print the value
  // for (let key in firstObjInObj){
  //   if (key === "description") {
  //     console.log(firstObjInObj[key]);
  //   }
  // }
});

