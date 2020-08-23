const db = require('../models');

const index = (req, res) => {
    db.Meal.find({}, (err, foundMeals) => {
        if (err) console.log('Error in mealsindex:', err);

        res.status(200).json(foundMeals);
    });
};

const show = (req, res) => {
    db.Meal.findById(req.params.id, (err, foundMeal) => {
        if (err) console.log('Error in mealsshow:', err);

        res.status(200).send(foundMeal);
    });
};

module.exports = {
    index,
    show,
}