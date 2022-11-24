const request = require("request");
const fs = require("fs");
const readline = require("readline");

const searchBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`; 

//console.log(url);
//console.log(localPath);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(url, (error, reponse, body) => {
  console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  // Normal way: if no error, then write file
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
    let firstObjInObj = data[Object.keys(data)[0]]; //Object.values(data)[0];
    //console.log(typeof firstObjInObj);

    // Find the key, and print the value
    for (let key in firstObjInObj){
      //console.log(key);
      if (key === "name") {
        console.log(firstObjInObj[key])
      }
      if (key === "description") {
        console.log(firstObjInObj[key]);
      }
    }
  });
rl.close; //process.exit(1);
