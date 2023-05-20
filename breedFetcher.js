const request = require("request");
const api = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchApi = api + process.argv[2];

request(searchApi, (error, response, body) => {
  if (error) {
    console.log(`The following error occured: ${error}`);
  } else if (body === '[]') {
    console.log(`The breed ${process.argv[2]} was not found in the database`);
  } else {
    const data = JSON.parse(body);
    console.log("Breed Description: ", data[0].description);
  }
});