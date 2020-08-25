const db = require('../models');

const index = (req, res) => {
    db.MealList.find({}, (err, foundMealList) => {
        if (err) console.log('Error in meallist index: ', err);

        res.status(200).json(foundMealList);
    });
};

const create = (req, res) => {
    db.MealList.create(req.body, (err, savedMealList) => {
        if (err) console.log('Error in meal list create: ', err);

        res.status(200).json(savedMealList);
    });
};

const update = (req, res) => {
    db.MealList.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMealList) => {
        if (err) console.log('Error in meallist update: ', err);

        if (!updatedMealList) {
            res.status(400).json({message: `Could not find meallist with id ${req.params.id}`});
        }
        res.json(updatedMealList);
    });
};

const destroy = (req, res) => {
    db.MealList.findByIdAndDelete(req.params.id, (err, deletedMealList) => {
        if (err) console.log('Error in meallist destroy:', err);

        res.status(200).json(deletedMealList);
    });
};

module.exports = {
    index,
    create,
    update,
    destroy,
};