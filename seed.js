const db = require('./models');
const data = require('./meals.json');

db.Meal.deleteMany({}, (err, deletedMeals) => {
    db.Meal.create(data.meals, (err, seedMeals) => {
        if (err) console.log(err);

        console.log(data.meals.length, 'meals created successfully');

        process.exit();
    });
});