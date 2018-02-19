const request = require('request');
const keys = require('./Marvel_key');

module.exports = (name) => {
//Stopped here
  console.log('API query is ', name)

  let ts = new Date().getTime();
  let options = {
    method: 'GET',
    headers: {
      "Accept": '*/*',
      "Content-Type": 'application/json'
    }
  }

    // pretend this works
  // request(`http://gateway.marvel.com/v1/public/characters?name=${name}&apikey=${apiKey}`, options, (err, results) => {
  //   if (err) {
  //     console.log('API request error: ', err);
  //   } else {
  //     console.log(results);
  //   }
  // })

//sends one request for id


//sends another request for character data

}