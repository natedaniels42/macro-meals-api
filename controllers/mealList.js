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
        
        res.status(200).send(foundMealList);
    });
};

const create = (req, res) => {
    db.User.findById(req.params.userid, (err, foundUser) => {
        if (err) console.log(err);
        
        db.MealList.create(req.body, (err, savedMealList) => {
            if (err) console.log('Error in meal list create: ', err);
    
            savedMealList.user = foundUser;
            savedMealList.save((err, updatedMealList) => {
                if (err) console.log(err);

                res.status(200).json({updatedMealList});
            }) 
        })
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
    db.MealList.findByIdAndDelete(req.params.meallistid, (err, deletedMealList) => {
        if (err) console.log('Error in meallist destroy:', err);

        db.User.findById(req.params.userid, (err, foundUser) => {
            if (err) console.log(err);
        
            foundUser.mealLists = foundUser.mealLists.filter(mealList => String(mealList) !== String(deletedMealList._id));
            foundUser.save((err, savedMealList) => {
                if (err) console.log(err);
                
                res.status(200).json({deletedMealList, savedMealList});
            })
        })
    });
};

const addMeal = (req, res) => {
    db.MealList.findById(req.params.meallistid, (err, foundMealList) => {
        if (err) console.log(err);
        db.Meal.findById(req.params.mealid, (err, foundMeal) => {
            if (err) console.log(err);
            
            const idList = foundMealList.meals.map(meal => meal._id);
            if (!idList.includes(foundMeal._id)) {
                foundMealList.meals.push(foundMeal);
                foundMealList.save((err, savedMealList) => {
                    if(err) console.log(err);
    
                    res.status(200).json(savedMealList);
                }) 

            }
        })
    })
}

const removeMeal = (req, res) => {
    db.MealList.findById(req.params.meallistid, (err, foundMealList) => {
        if (err) console.log(err);
        db.Meal.findById(req.params.mealid, (err, foundMeal) => {
            if (err) console.log(err);

            foundMealList.meals = foundMealList.meals.filter(meal => String(meal._id) !== String(foundMeal._id));
            foundMealList.save((err, savedMealList) => {
                if (err) console.log(err);

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
    removeMeal,
};