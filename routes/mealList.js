const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.mealList.create);
router.delete('/:id', ctrl.mealList.destroy);

module.exports = router;