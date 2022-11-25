const request = require("request");


//console.log(url);
//console.log(localPath);

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    
    // Convert the JSON string into an actual object
    const data = JSON.parse(body);
    // Access the 1st entry of data array - breed
    let breed = data[0];

    if (!breedName || data.length < 1) {
      //console.log("Breed no found!");
      return callback("Breed no found!", null);
    }
    if (error || response.statusCode !== 200) {
      // console.log("URL not found!");
      return callback("URL not found!", null);
    }
    if (breed) {
      //console.log(breed["description"]);
      return callback(null, breed["description"]);
    }
    // Find the key, and print the value
    // for (let key in firstObjInObj){
    //   if (key === "description") {
    //     console.log(firstObjInObj[key]);
    //   }
    // }
  });
};

module.exports = { fetchBreedDescription };
