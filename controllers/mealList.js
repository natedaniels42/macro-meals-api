const db = require('../models');

const index = (req, res) => {
    db.MealList.find({}, (err, foundMealList) => {
        if (err) console.log('Error in meallist index: ', err);

        res.status(200).json(foundMealList);
    });
};

const show = (req, res) => {
    db.MealList.findById(req.params.id) 
        .populate({path: 'meals'})
        .exec((err, foundMealList) => {
        if (err) console.log('Error in meallist show: ', err);
        console.log(foundMealList);
        res.status(200).send(foundMealList);
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

const addMeal = (req, res) => {
    console.log(req.params);
    db.MealList.findById(req.params.meallistid, (err, foundMealList) => {
        if (err) console.log(err);
        console.log(foundMealList);
        db.Meal.findById(req.params.mealid, (err, foundMeal) => {
            if (err) console.log(err);
            console.log(foundMeal);
            foundMealList.meals.push(foundMeal);
            foundMealList.save((err, savedMealList) => {
                if(err) console.log(err);

                res.status(200).json(savedMealList);
            }) 
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addMeal,
};