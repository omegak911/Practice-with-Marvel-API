const router = require('express').Router();
const mongoCtrl = require('./mongoCtrl');

router.get('/findCharacterInDB', mongoCtrl.get.findCharacterInDB);
router.get('/login', mongoCtrl.get.login);

router.post('/signup', mongoCtrl.post.signup);

router.put('/updateUserInventory', mongoCtrl.put.updateUserInventory);

module.exports = router;