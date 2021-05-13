const mongoose = require('mongoose');

const mealListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    meals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const MealList = mongoose.model('MealList', mealListSchema);

module.exports = MealList;