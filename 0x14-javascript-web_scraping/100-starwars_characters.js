#!/usr/bin/node
const request = require('request');
const url = 'https://swapi.dev/api/people/' + process.argv[2];
request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const characters = JSON.parse(body).results;
    characters.forEach((character) => {
      request(character.url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(JSON.parse(body).name);
        }
      });
    });
  } else {
    console.error('Error: ' + error);
  }
});

