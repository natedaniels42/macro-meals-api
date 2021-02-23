const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./routes');

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200
}));

app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      "http://<YOUR-APP-NAME>.herokuapp.com"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api/v1/meals', routes.meals);
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/mealList', routes.mealList);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));