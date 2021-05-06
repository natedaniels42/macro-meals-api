const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.mealList.index);
router.get('/:id', ctrl.mealList.show);
router.post('/:userid', ctrl.mealList.create);
router.put('/:id', ctrl.mealList.update);
router.delete('/:id', ctrl.mealList.destroy);
router.post('/:meallistid/addmeal/:mealid', ctrl.mealList.addMeal);
router.post('/:meallistid/removemeal/:mealid', ctrl.mealList.removeMeal);

module.exports = router;