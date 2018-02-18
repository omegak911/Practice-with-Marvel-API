const request = require('request');
const apiKey = require('./Marvel_key');

module.exports = ({name}) => {

  let options = {
    method: 'GET',
    params: {
      "apikey": apiKey,
    },
    headers: {
      accept: '*'
    }
  }

  request("http://gateway.marvel.com/v1/public/characters", options, (err, results) => {
    if (err) {
      console.log('API request error: ', err);
    } else {
      console.log(results);
    }
  })

//sends one request for id


//sends another request for character data

}