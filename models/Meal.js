const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    link: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    carbs: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    fat: {
        type: Number,
        required: true,
    },
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;