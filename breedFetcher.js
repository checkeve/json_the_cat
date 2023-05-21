const request = require("request");
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(api + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback("Breed was not found", null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
}; 

module.exports = {fetchBreedDescription};




