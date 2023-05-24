const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, function (err) {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File saved successfully.');
      }
    });
  } else {
    console.error('Error requesting URL:', error);
  }
});
