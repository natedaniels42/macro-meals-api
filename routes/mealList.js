const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.mealList.create);

module.exports = router;