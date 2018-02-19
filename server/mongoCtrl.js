const mongoose = require('mongoose');
const dbHelpers = require('../db/dbHelpers');
// {addNewCharacter, findCharacterInDB, findUser, saveNewUser, updateUserInventory}

const apiHelpers = require('../api/apiHelpers');
//TODO
// pw hashing


module.exports = {
  get: {
    //TODO: check if this works
    findCharacterInDB: function(req, res) {
      console.log(req.query)
      dbHelpers.findCharacterInDB(req.query, (result) => {
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          // res.status(200).send('Need to get from API');
          console.log('Name at GET request is: ', req.query.name)
          apiHelpers(req.query, (result) => {
            //save to DB
          });
          res.status(200).send('Need to get from API'); //send result
        }
      })
      //checks if character already resides in DB
        //if yes, send to user
        //else, sends API request(see TODO)
        //once API response received
          //invoke addNewCharacter
          //send to user
    },
    login: function(req, res) {
      dbHelpers.findUser(req.query, (result) => {
        if (result.length === 0 || result[0].password !== req.query.password) {
          res.status(200).send('404');
        } else {
          res.status(200).send(result);
        }
      })
    }
  },
  post: {
    addNewCharacter: function(req, res) {
      dbHelpers.addNewCharacter(req.body);
      res.status(200).send('Added!')
    },
    signup: function (req, res) {
      dbHelpers.findUser(req.body, (result) => {
        console.log('result in post: ', result);
        if (result.length > 0) {
          res.status(201).send('Username is taken');
        } else {
          dbHelpers.saveNewUser(req.body)
          res.status(200).send('User Created')
        }
      })
    }
  },
  put: {
    updateUserInventory: function(req, res) {
      dbHelpers.updateUserInventory(req.body);
      res.status(200).send('Inventory Updated');
    }
  },
  delete: {  //TODO in DBHelpers
    unsubscribe: function(req, res) {
      //invokes findUser to check username and password
        //if correect, deletes user from DB
        //else, reject request
    }
  }
}