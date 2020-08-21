const mongoose = require('mongoose');
require('dotenv').config();
console.log('MONGO DB =', process.env.MONGODB_URI);
const connectionString = process.env.MONGODB_URI;
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Meal: require('./Meal'),
    MealList: require('./MealList'),
    User: require('./User'),
};