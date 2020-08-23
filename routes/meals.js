const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.meals.index);

module.exports = router;