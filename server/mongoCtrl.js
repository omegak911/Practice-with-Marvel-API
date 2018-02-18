const mongoose = require('mongoose');
const dbHelpers = require('../db/dbHelpers');
// {addNewCharacter, findCharacterInDB, findUser, saveNewUser, updateUserInventory}

const apiHelpers = require('../api/apiHelpers');
//TODO
// const apiHelpers = require('../api/apiHelpers');

module.exports = {
  get: {
    //TODO: check if this works
    findCharacterInDB: function(req, res) {
      dbHelpers.findCharacterInDB(req.body, (result) => {
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          //call API
          apiHelpers(req.body)
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
      //TODO: check if this works
      res.status(200).send('Login Found')
      dbHelpers.findUser(req.body, (result) => {
        if (result.length === 0 || result.password !== req.body.password) {
          res.status(200).send('username and/or password does not match');
        } else {
          res.status(200).send(result);
        }
      })
    }
  },
  post: {
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