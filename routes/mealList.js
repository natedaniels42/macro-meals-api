const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.mealList.index);
router.post('/', ctrl.mealList.create);
router.put('/:id', ctrl.mealList.update);
router.delete('/:id', ctrl.mealList.destroy);

module.exports = router;