const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./routes');

app.use(cors({
    origin: ['https://macro-meals42.herokuapp.com/'],
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api/v1/meals', routes.meals);
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/mealList', routes.mealList);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));