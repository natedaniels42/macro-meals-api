const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.meals.index);
router.get('/:id', ctrl.meals.show);

module.exports = router;