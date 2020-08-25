const db = require('../models');

const create = (req, res) => {
    db.MealList.create(req.body, (err, savedMealList) => {
        if (err) console.log('Error in meal list create: ', err);

        res.status(200).json(savedMealList);
    });
};

module.exports = {
    create,
};