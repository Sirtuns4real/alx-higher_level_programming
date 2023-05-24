const request = require('request');

const movieId = process.argv[2];

const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

request(movieUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    characterUrls.forEach((characterUrl) => {
      request(characterUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.error('Error requesting movie data:', error);
  }
});
