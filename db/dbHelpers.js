const db = require('./index');

const Character = db.Character;
const User = db.User;

// TODO: add unsubscribe function

let addNewCharacter = function(character) {
  //adds new character from API to DB
  // let newCharacter = {
    // name: ,
    // description: ,
    // urls: ,
    // thumbnail: ,
    // comics: ,
    // series: 
  // }

  // addNewCharacter.save()
}

let findCharacterInDB = function({name}, callback) {
  Character.find({name: name})
    .exec( (err, results) => {
        callback(result);
    })
}

let findUser = function({name}, callback) {
  User.find({name: name})
    .exec( (err, result) => {
        callback(result);
    });
}

let saveNewUser = function({name, password}) {
  // creates new user
  let newUser = new User({
    name: name,
    password: password,
    inventory: []
  })

  newUser.save();
}

let updateUserInventory = function({name, inventory}) {
  User.findOneAndUpdate({name: name}, {$set:{inventory: inventory}}, (err, doc) => {
    if (err) { console.log(err);} else {console.log(doc)}
  });
}

module.exports = {addNewCharacter, findCharacterInDB, findUser, saveNewUser, updateUserInventory}