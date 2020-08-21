const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));