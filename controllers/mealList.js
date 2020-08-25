const db = require('../models');

const create = (req, res) => {
    db.MealList.create(req.body, (err, savedMealList) => {
        if (err) console.log('Error in meal list create: ', err);

        res.status(200).json(savedMealList);
    });
};

const destroy = (req, res) => {
    db.MealList.findByIdAndDelete(req.params.id, (err, deletedMealList) => {
        if (err) console.log('Error in meallist destroy:', err);

        res.status(200).json(deletedMealList);
    });
};

module.exports = {
    create,
    destroy,
};