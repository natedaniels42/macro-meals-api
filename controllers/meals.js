const db = require('../models');

const index = (req, res) => {
    db.Meal.find({}, (err, foundMeals) => {
        if (err) console.log('Error in mealsindex:', err);

        res.status(200).json(foundMeals);
    });
};

module.exports = {
    index,
}