let express = require('express');
let router = express.Router();
let puppiesCtrl = require('../controllers/api/puppies');

router.get('/puppies', puppiesCtrl.getAllPuppies);
router.get('/puppies/:id', puppiesCtrl.getOnePuppy);
router.post('/puppies', puppiesCtrl.createPuppy);
router.delete('/puppies/:id', puppiesCtrl.deletePuppy);
router.put('/puppies/:id', puppiesCtrl.updatePuppy);

module.exports = router;
