const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MarvelList');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('MarvelList DB activated!'));

const userSchema = mongoose.Schema({
  name: {type: String, unique: true},
  password: String,
  inventory: Object
})

const User = mongoose.model('User', userSchema);

const characterSchema = mongoose.Schema({
  name: {type: String, unique: true},
  description: String,
  urls: Object,
  thumbnail: String,
  comics: Object,
  series: Object
})

const Character = mongoose.model('Character', characterSchema);

// let test = new Character({
//   name: 'Omegak',
//   description: 'From the depths of your imagination',
//   urls: 'www.omegak.com',
//   thumbnail: 'poop.png',
//   comics: 'Omega-1',
//   series: 'Omega-2'
// })

// test.save();

module.exports = {Character, User}