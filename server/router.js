const router = require('express').Router();
const mongoCtrl = require('./mongoCtrl');

router.get('/findCharacterInDB', mongoCtrl.get.findCharacterInDB); //Check
router.get('/login', mongoCtrl.get.login);

router.post('/signup', mongoCtrl.post.signup); //Check

router.put('/updateUserInventory', mongoCtrl.put.updateUserInventory);//Check

router.post('/addNewCharacter', mongoCtrl.post.addNewCharacter);

module.exports = router;